/*
  Auto-updater for pjexplained.com
  ---------------------------------
  Runs on GitHub every few hours (see .github/workflows/update.yml).
  Fetches fresh numbers, videos and reels, then writes:
    live.json     — the raw fresh values (kept between runs)
    data-live.js  — loaded by both pages, lays the fresh values over data.js

  Every source is optional. If a key is missing or a request fails, the last
  good value is kept, so the site never shows blanks.

  Secrets (GitHub → Settings → Secrets and variables → Actions):
    YT_API_KEY        YouTube Data API v3 key
    META_TOKEN        Meta access token (Instagram + Facebook Page)
    IG_USER_ID        Instagram professional account id
    FB_PAGE_ID        Facebook Page id
    THREADS_TOKEN     optional, Threads API token
    THREADS_USER_ID   optional, Threads user id
*/
import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const env = process.env;
const log = (...a) => console.log("•", ...a);

// ---------- load data.js (the hand-edited base) ----------
const dataSrc = await readFile(path.join(ROOT, "data.js"), "utf8");
const sandbox = { document: { addEventListener() {} }, navigator: { userAgent: "" }, location: {}, window: {} };
vm.runInNewContext(dataSrc + "\n;globalThis.__PJ = PJ;", sandbox);
const PJ = sandbox.__PJ;

let prev = {};
try { prev = JSON.parse(await readFile(path.join(ROOT, "live.json"), "utf8")); } catch {}
const live = structuredClone(prev);

// ---------- number formatting ----------
const sig3 = n => {
  if (n >= 1e9) return +(n / 1e9).toPrecision(3) + "B";
  if (n >= 1e6) return +(n / 1e6).toPrecision(3) + "M";
  if (n >= 1e3) return +(n / 1e3).toPrecision(3) + "K";
  return String(n);
};
// rounded down, one decimal under 100 (2.5B+, 35.7M+), none above (171M+)
const floor1 = n => {
  const [unit, sfx] = n >= 1e9 ? [1e9, "B"] : n >= 1e6 ? [1e6, "M"] : n >= 1e3 ? [1e3, "K"] : [1, ""];
  const v = n / unit, f = v >= 100 ? 1 : 10;
  return Math.floor(v * f) / f + sfx + "+";
};
const short = n => (n >= 1e3 ? sig3(n).replace(/(\.\d)\d+/, "$1") : String(n));
const parse = s => {
  const m = String(s || "").replace(/,/g, "").match(/([\d.]+)\s*([KMB])?/i);
  if (!m) return 0;
  return +m[1] * ({ K: 1e3, M: 1e6, B: 1e9 }[(m[2] || "").toUpperCase()] || 1);
};
const grouped = n => n.toLocaleString("en-US");
const cleanTitle = t => t.replace(/\s*⋮\s*/g, " — ").replace(/\s+/g, " ").trim();
const day = iso => iso.slice(0, 10);
const seconds = d => { const m = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || []; return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0); };

async function getJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 200)}`);
  return r.json();
}

// ---------- YouTube ----------
async function youtube() {
  if (!env.YT_API_KEY) return log("YouTube: no YT_API_KEY, skipped");
  const key = env.YT_API_KEY, api = "https://www.googleapis.com/youtube/v3";
  const stats = {};
  for (const c of PJ.channels) {
    const j = await getJSON(`${api}/channels?part=statistics,contentDetails&forHandle=${encodeURIComponent(c.handle)}&key=${key}`);
    const it = j.items && j.items[0];
    if (!it) { log("YouTube: not found", c.handle); continue; }
    stats[c.handle] = {
      subs: +it.statistics.subscriberCount, views: +it.statistics.viewCount, videos: +it.statistics.videoCount,
      uploads: it.contentDetails.relatedPlaylists.uploads
    };
  }

  // latest long-form uploads (Shorts are skipped)
  async function uploads(handle, n = 10) {
    const s = stats[handle]; if (!s) return [];
    const pl = await getJSON(`${api}/playlistItems?part=contentDetails&maxResults=30&playlistId=${s.uploads}&key=${key}`);
    const ids = pl.items.map(i => i.contentDetails.videoId).join(",");
    const v = await getJSON(`${api}/videos?part=snippet,statistics,contentDetails&id=${ids}&key=${key}`);
    return v.items
      .filter(x => seconds(x.contentDetails.duration) > 180 && x.snippet.liveBroadcastContent === "none")
      .map(x => ({ id: x.id, date: day(x.snippet.publishedAt), views: sig3(+x.statistics.viewCount || 0), n: +x.statistics.viewCount || 0, title: cleanTitle(x.snippet.title) }))
      .slice(0, n);
  }
  const [main, thepj, moc] = await Promise.all([uploads("@PJExplained"), uploads("@thepjoffical", 15), uploads("@menofculturepodcast", 3)]);
  const strip = v => ({ id: v.id, date: v.date, views: v.views, title: v.title });

  live.channels = PJ.channels.filter(c => stats[c.handle]).map(c => ({
    handle: c.handle, subs: sig3(stats[c.handle].subs), videos: short(stats[c.handle].videos)
  }));
  const s = stats["@PJExplained"];
  if (s) live.youtube = { subs: sig3(s.subs), views: floor1(s.views), videos: grouped(s.videos) };

  const all = Object.values(stats);
  live.yt = { subs: all.reduce((a, b) => a + b.subs, 0), views: all.reduce((a, b) => a + b.views, 0), videos: all.reduce((a, b) => a + b.videos, 0), count: all.length };

  if (main.length) {
    live.pjVideos = main.slice(0, 8).map(strip);
    const tag = (v, ch) => v && { ...strip(v), channel: ch };
    live.latest = [tag(main[0], "PJ Explained"), tag(thepj[0], "thePJ"), tag(moc[0], "Men of Culture"),
      ...main.slice(1, 5).map(v => tag(v, "PJ Explained")), tag(thepj[1], "thePJ"), tag(main[5], "PJ Explained")].filter(Boolean);
  }
  const t = stats["@thepjoffical"];
  if (t && thepj.length) {
    const monthAgo = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
    const top = Math.max(...thepj.filter(v => v.date >= monthAgo).map(v => v.n), 0);
    live.thepj = {
      stats: [{ value: sig3(t.subs), label: "subscribers" }, { value: floor1(t.views), label: "views" },
              top ? { value: sig3(top), label: "top reaction this month" } : PJ.thepj.stats[2]],
      videos: [...thepj].sort((a, b) => b.n - a.n).slice(0, 8).map(strip)
    };
  }
  log("YouTube: updated", Object.keys(stats).length, "channels");
}

// ---------- Instagram + Facebook (Meta Graph API) ----------
async function meta() {
  if (!env.META_TOKEN) return log("Meta: no META_TOKEN, skipped");
  const g = "https://graph.facebook.com/v21.0", tok = `access_token=${env.META_TOKEN}`;
  live.socials = live.socials || [];
  const setSocial = (logo, count) => { live.socials = live.socials.filter(s => s.logo !== logo).concat({ logo, count }); };
  if (env.IG_USER_ID) {
    const p = await getJSON(`${g}/${env.IG_USER_ID}?fields=followers_count,media_count,profile_picture_url&${tok}`);
    live.instagram = { followers: sig3(p.followers_count), posts: grouped(p.media_count), ...(p.profile_picture_url ? { avatar: p.profile_picture_url } : {}) };
    live.igFollowers = p.followers_count;
    setSocial("instagram", sig3(p.followers_count));
    const m = await getJSON(`${g}/${env.IG_USER_ID}/media?fields=media_product_type,thumbnail_url,media_url,permalink,timestamp&limit=30&${tok}`);
    const reels = m.data.filter(x => x.media_product_type === "REELS" && (x.thumbnail_url || x.media_url))
      .map(x => ({ url: x.permalink, date: day(x.timestamp), img: x.thumbnail_url || x.media_url })).slice(0, 10);
    if (reels.length) live.reels = reels;
    log("Instagram: updated,", reels.length, "reels");
  }
  if (env.FB_PAGE_ID) {
    const f = await getJSON(`${g}/${env.FB_PAGE_ID}?fields=followers_count&${tok}`);
    live.fbFollowers = f.followers_count;
    setSocial("facebook", sig3(f.followers_count));
    log("Facebook: updated");
  }
}

// ---------- Threads (optional) ----------
async function threads() {
  if (!env.THREADS_TOKEN || !env.THREADS_USER_ID) return log("Threads: no token, skipped");
  const j = await getJSON(`https://graph.threads.net/v1.0/${env.THREADS_USER_ID}/threads_insights?metric=followers_count&access_token=${env.THREADS_TOKEN}`);
  const n = j.data[0].total_value.value;
  live.threadsFollowers = n;
  live.socials = (live.socials || []).filter(s => s.logo !== "threads").concat({ logo: "threads", count: sig3(n) });
  log("Threads: updated");
}

// ---------- Moctale App Store rating (no key needed) ----------
async function appStore() {
  const id = (PJ.moctale.ios.match(/id(\d+)/) || [])[1];
  if (!id) return;
  const j = await getJSON(`https://itunes.apple.com/lookup?id=${id}&country=in`);
  const a = j.results && j.results[0];
  if (!a || !a.averageUserRating) return log("App Store: no rating yet");
  live.moctaleStats = [{ key: "appstore", value: a.averageUserRating.toFixed(1) + "★", label: `App Store · ${grouped(a.userRatingCount)} ratings` }];
  log("App Store: updated");
}

for (const [name, fn] of Object.entries({ youtube, meta, threads, appStore })) {
  try { await fn(); } catch (e) { console.warn(`! ${name} failed, keeping last values:`, e.message); }
}

// ---------- totals, computed from the freshest numbers we have ----------
const socialNum = logo => parse((live.socials || []).find(s => s.logo === logo)?.count ?? PJ.socials.find(s => s.logo === logo)?.count);
const ytSubs = live.yt?.subs ?? PJ.channels.reduce((a, c) => a + parse(c.subs), 0);
const ytViews = live.yt?.views;
const across = ytSubs + socialNum("instagram") + socialNum("facebook") + socialNum("threads") + socialNum("x");
live.totals = [
  { value: live.youtube?.subs ?? PJ.youtube.subs, label: "YouTube subscribers" },
  { value: live.instagram?.followers ?? PJ.instagram.followers, label: "Instagram followers" },
  { value: floor1(across), label: "followers across platforms" },
  { value: ytViews ? floor1(ytViews) : PJ.totals[3].value, label: "YouTube views" }
];
if (live.yt) live.networkTotals = [
  { value: floor1(live.yt.subs), label: "YouTube subscribers" },
  { value: floor1(live.yt.views), label: "YouTube views" },
  { value: grouped(Math.floor(live.yt.videos / 100) * 100) + "+", label: "videos published" },
  { value: String(live.yt.count), label: "YouTube channels" }
];
live.updated = new Date().toISOString().slice(0, 10);

// ---------- write files ----------
await writeFile(path.join(ROOT, "live.json"), JSON.stringify(live, null, 2) + "\n");
const { yt, igFollowers, fbFollowers, threadsFollowers, ...forPage } = live;
await writeFile(path.join(ROOT, "data-live.js"),
  "/* AUTO-GENERATED by scripts/update.mjs every few hours — do not edit. Edit data.js instead. */\n" +
  `PJ_applyLive(${JSON.stringify(forPage)});\n`);
log("Wrote live.json and data-live.js, updated", live.updated);
