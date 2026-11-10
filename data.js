/*
  ================================================================
  ALL YOUR CONTENT LIVES HERE — both pages (home + /links) read it.
  Change text between the quotes, save, refresh. No coding needed.

  Numbers, latest videos and reels were checked on the date in
  "updated" below. Once the live updater is set up it rewrites
  them every day. Instagram image links expire after a few days —
  the updater fixes that too.
  ================================================================
*/
const PJ = {
  updated: "2026-11-10",
  name: "PJ Explained",
  realName: "Priyanshu Jaiswal",
  tagline: "Just a man with his internet connection.",
  bio: "Pop-culture critic and storyteller. Reviews, leaks, trailer breakdowns and the stories behind the movies everyone is talking about — since 2017.",
  // Big hero photo. Put your own photo file next to index.html (e.g. "pj.jpg") for the best look.
  // photoPos moves the crop: first number = left/right, second = up/down.
  photo: "https://i.ytimg.com/vi/lbHfXjL6U80/maxresdefault.jpg",
  photoPos: "78% 30%",
  linksPhoto: "/assets/hero-links.jpg", // portrait crop (no thumbnail text) used on /links
  email: "teamthepj@gmail.com", // business email for collabs — leave "" to show Instagram DM instead
  // Team WhatsApp, written backwards (with country code 91) so bots scraping the page don't pick it up.
  // The page shows it only after someone taps. Example: 91 78743 23906 → "609323478719"
  teamWhatsApp: "609323478719",

  youtube: {
    name: "PJ Explained", handle: "@PJExplained", url: "https://www.youtube.com/@PJExplained",
    subs: "2.7M", views: "2B+", videos: "3,298", since: "2017"
  },

  instagram: {
    name: "thePJ", handle: "@pjexplained", url: "https://www.instagram.com/pjexplained",
    followers: "940K", posts: "2,167", rhythm: "Daily",
    avgViews: "",     // e.g. "450K" — fill in from Instagram Insights, shows up automatically
    engagement: "",   // e.g. "6.2%"
    avatar: "/assets/ig-avatar.jpg" // saved locally; Instagram image links expire
  },

  // Latest Instagram reels (newest first). date = day it was posted.
  reels: [
    { url: "https://www.instagram.com/pjexplained/reel/Dfi5EC_heK1/", date: "2026-11-10", img: "/assets/reels/Dfi5EC_heK1.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfhfVoypq8-/", date: "2026-11-09", img: "/assets/reels/DfhfVoypq8-.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfhNZVdpZDX/", date: "2026-11-09", img: "/assets/reels/DfhNZVdpZDX.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/Dfelia6JHWH/", date: "2026-11-08", img: "/assets/reels/Dfelia6JHWH.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfeAIhKp1_2/", date: "2026-11-08", img: "/assets/reels/DfeAIhKp1_2.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfcDSCBhMkL/", date: "2026-11-07", img: "/assets/reels/DfcDSCBhMkL.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfbbnosJLr9/", date: "2026-11-07", img: "/assets/reels/DfbbnosJLr9.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfY1hjOpo3o/", date: "2026-11-06", img: "/assets/reels/DfY1hjOpo3o.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfXky5hSIhc/", date: "2026-11-05", img: "/assets/reels/DfXky5hSIhc.jpg" },
    { url: "https://www.instagram.com/pjexplained/reel/DfXdyjrhIp0/", date: "2026-11-05", img: "/assets/reels/DfXdyjrhIp0.jpg" }
  ],

  // Your reach. Shown right under the hero.
  totals: [
    { value: "2.7M",   label: "YouTube subscribers" },
    { value: "940K",   label: "Instagram followers" },
    { value: "5.3M+",  label: "followers across platforms" },
    { value: "2.5B+",  label: "YouTube views" }
  ],

  // Every YouTube channel in the PJ Explained network. featured = big photo card on the home page.
  channels: [
    { name: "PJ Explained",              handle: "@PJExplained",            subs: "2.7M",  videos: "3.3K", url: "https://www.youtube.com/@PJExplained",            featured: true, tag: "Main channel", group: "pj", icon: "youtube", cover: "G-GOouv3dDI", coverPos: "50% 35%",
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_kZDPy1Lt5dc0Doto1Dqb-uG24R6B1ZkeH7E58r4NMUxkE=s160-c-k-c0x00ffffff-no-rj" },
    { name: "thePJ",                     handle: "@thepjoffical",           subs: "450K",  videos: "670",  url: "https://www.youtube.com/@thepjoffical",           featured: true, tag: "Reactions", group: "pj", icon: "youtube", cover: "pR3jJlXSMm0", coverPos: "62% 40%",
      avatar: "https://yt3.googleusercontent.com/ARz1iH-SuC2pPQffFIDkkA9B-VU6PIFTffNZg3UhNf9Ys5eDMv65fFxIHfMpX4Q5WlVWYX2fFg=s160-c-k-c0x00ffffff-no-rj" },
    { name: "Men of Culture",            handle: "@menofculturepodcast",    subs: "417K",  videos: "630",  url: "https://www.youtube.com/@menofculturepodcast",    featured: true, tag: "Podcast", group: "moc", icon: "podcast", cover: "VrAqu5_tq2s", coverPos: "30% 40%", verified: true,
      avatar: "https://yt3.googleusercontent.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s160-c-k-c0x00ffffff-no-rj" },
    { name: "Men of Culture Highlights", handle: "@menofculturehighlights", subs: "220K",  videos: "2.8K", url: "https://www.youtube.com/@menofculturehighlights", tag: "Podcast highlights", group: "moc", ext: true, icon: "podcast",
      avatar: "https://yt3.googleusercontent.com/ZTzKSl5khHFLDTAWkFP7PZZikio9a90V6XqQEOP8dO6eGiZhdU3m0bAeJrg1LYAMKCTQ5CzuFg=s160-c-k-c0x00ffffff-no-rj" },
    { name: "Men of Culture Ultra",      handle: "@MenofCultureUltra",      subs: "165K",  videos: "275",  url: "https://www.youtube.com/@MenofCultureUltra", tag: "Podcast extension", group: "moc", ext: true, icon: "podcast",
      avatar: "https://yt3.googleusercontent.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s160-c-k-c0x00ffffff-no-rj" },
    { name: "thePJ Gaming",              handle: "@gamingthepj",            subs: "70.1K", videos: "8",    url: "https://www.youtube.com/@gamingthepj", tag: "Gaming", group: "pj", icon: "gaming",
      avatar: "/assets/thepj-gaming.jpg" },
    { name: "Moctale",                   handle: "@moctaleYT",              subs: "5.7K",  videos: "1",    url: "https://www.youtube.com/@moctaleYT", tag: "Moctale", group: "moctale", icon: "moctale",
      avatar: "https://yt3.googleusercontent.com/v0sbLWpp3mInP9SesAXcon7jd-bMDpMeEoNpragTVZ4SrO1qnvF8sMNzlHuFKKeVuDW8h2-zNb0=s120-c-k-c0x00ffffff-no-rj" }
  ],
  // How channels are grouped on the page
  channelGroups: [
    { id: "pj",      name: "PJ Explained",          note: "Main channel, reactions and gaming" },
    { id: "moc",     name: "Men of Culture podcast", note: "The podcast and its extension channels" },
    { id: "moctale", name: "Moctale",               note: "The app's own channel" }
  ],
  networkTotals: [
    { value: "4M+",    label: "YouTube subscribers" },
    { value: "2.5B+",  label: "YouTube views" },
    { value: "7,600+", label: "videos published" },
    { value: "7",      label: "YouTube channels" }
  ],

  // Socials, shown with their real logos and colours. count = shown when filled in.
  // logo = the brand's icon name, bg = its brand colour
  socials: [
    { name: "Instagram", handle: "@pjexplained", role: "Reels, posts and stories",         logo: "instagram", bg: "linear-gradient(45deg,#feda75,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5)", count: "940K",   unit: "followers", url: "https://www.instagram.com/pjexplained" },
    { name: "Facebook",  handle: "PJ Explained", role: "Videos and updates",         logo: "facebook",  bg: "#0866ff", count: "192K",   unit: "followers", url: "https://www.facebook.com/pjexplained" },
    { name: "Threads",   handle: "@pjexplained", role: "Quick takes and updates",         logo: "threads",   bg: "#000",    count: "128.7K", unit: "followers", url: "https://www.threads.net/@pjexplained" },
    { name: "X",         handle: "@pjexplained", role: "Posts and film chatter",         logo: "x",         bg: "#000",    count: "61.8K",  unit: "followers", url: "https://x.com/pjexplained" },
    { name: "Snapchat",  handle: "@pjexplained", role: "Stories and behind the scenes",         logo: "snapchat",  bg: "#fffc00", fg: "#000", url: "https://www.snapchat.com/add/pjexplained" },
    { name: "WhatsApp",  handle: "PJ Explained channel", role: "Channel for new video alerts", logo: "whatsapp",  bg: "#25d366", url: "https://whatsapp.com/channel/0029VaijEmHFXUuRpevXex2o" },
    { name: "LinkedIn",  handle: "Priyanshu Jaiswal", role: "Professional profile",    logo: "linkedin",  bg: "#0a66c2", url: "https://www.linkedin.com/in/priyanshu-jaiswal-531058318/" },
    { name: "Reddit",    handle: "r/PJExplained", role: "Fan community",        logo: "reddit",    bg: "#ff4500", url: "https://www.reddit.com/r/PJExplained/" } // ← confirm this community name
  ],

  // Moctale — what we're building
  moctale: {
    logo: "https://www.moctale.in/Moctale-logo-HQ.svg",
    icon: "https://www.moctale.in/apple-touch-icon-180x180.png",
    tagline: "Find your next favourite movie.",
    blurb: "Moctale helps India discover what to watch across streaming and theatres — rate with the Moctale Meter, follow friends and read reviews from a real community. Built by Men of Culture.",
    // Short "what is Moctale" points
    features: [
      { title: "Discover", text: "Trending, upcoming and new releases across every OTT and theatres — no endless scrolling." },
      { title: "Rate",     text: "The Moctale Meter: Perfection, Go For It, Timepass or Skip It. One tap, no star maths." },
      { title: "Engage",   text: "Follow friends and movie lovers, read real community reviews and see what they're watching." }
    ],
    ios: "https://apps.apple.com/in/app/moctale/id6782066491",
    android: "https://play.google.com/store/apps/details?id=moctale.android.app",
    stats: [
      // key "appstore" is refreshed automatically; the others you update by hand
      { key: "downloads", value: "100K+", label: "downloads on Google Play" },
      { key: "play",      value: "4.8★",  label: "Google Play · 7.22K reviews" },
      { key: "appstore",  value: "4.6★",  label: "App Store · 327 ratings" },
      { key: "rank",      value: "#181",  label: "App Store India · Entertainment" },
      { key: "ig",        value: "37K",   label: "on Instagram @moctale.in" }
    ],
    // App screenshots from the store listing
    screens: [
      "https://play-lh.googleusercontent.com/R-iZ7Ft2YrFRCroy3aYM-4d2DXgmTYGQKCgW1uF16MVQ3THJVVhKGTdtgksgjJhNRFKGWrr6eVVIX2hvwbsr=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/MtKkGiStnnJwTe6hFWgTlGwPA93NIRvUoSkaBisDGyYIU8kZSaYLL2Uq_5XfuHuDgDWZxopFb13ITsEOj5b-Eg=w1052-h592-rw",
      "https://play-lh.googleusercontent.com/Rnx0gF2FeeBd9JT2nk4-Rzqg-W5mtQml2kuAjgNZidhDZ4fVO0t8oGgsPjimReij3m5sVrhY5Hctj-BqbSQ7=w1052-h592-rw"
    ],
    links: [
      { name: "moctale.in",   logo: "",          url: "https://www.moctale.in" },
      { name: "Instagram",    logo: "instagram", url: "https://www.instagram.com/moctale.in" },
      { name: "YouTube",      logo: "youtube",   url: "https://www.youtube.com/@moctaleYT" },
      { name: "r/moctale",    logo: "reddit",    url: "https://www.reddit.com/r/moctale/" },
      { name: "WhatsApp",     logo: "whatsapp",  url: "https://whatsapp.com/channel/0029Vb5RV7a5a242NO2DEg2K" },
      { name: "Discord",      logo: "discord",   url: "https://discord.com/invite/pZm9aGhQVA" }
    ]
  },

  // Latest YouTube uploads. id = the part after "watch?v=". date = day it went live.
  latest: [
    { id: "tKwgM_hApwU", channel: "PJ Explained",   date: "2026-11-09", views: "497K", title: "Ramayana Movie vs Valmiki Ramayan | Fact Check" },
    { id: "vWzORJy4PBM", channel: "Men of Culture", date: "2026-11-07", views: "688K", title: "First Time in Indian Cinema: Ramayana Movie Discussion" },
    { id: "50nAp0xuY0E", channel: "PJ Explained",   date: "2026-11-06", views: "1.8M", title: "Ramayana Post-Credit Scene & Ending Explained" },
    { id: "W91hLf4r1rY", channel: "PJ Explained",   date: "2026-11-05", views: "1.6M", title: "Ramayana Movie Review (Spoiler-Free)" },
    { id: "LO0X9TKX6yM", channel: "Men of Culture", date: "2026-11-03", views: "705K", title: "We Watched Adipurush Again (Live Reaction)" },
    { id: "BtuLdsziCPE", channel: "PJ Explained",   date: "2026-11-02", views: "822K", title: "Watch This Before Ramayana Part 1" },
    { id: "ius56OJAEf8", channel: "PJ Explained",   date: "2026-10-29", views: "958K", title: "Why Bhojpuri Songs Are Soo Vulgar?" },
    { id: "UtvAD7AoFS8", channel: "thePJ",          date: "2026-10-28", views: "292K", title: "Jumanji 3 Open World Trailer • Reaction" },
    { id: "6kRZ55k0Eg8", channel: "thePJ",          date: "2026-10-27", views: "300K", title: "The Ramayan Marketing Scam Is Crazy" }
  ],

  // Slider on /links: latest PJ Explained uploads
  pjVideos: [
    { id: "tKwgM_hApwU", date: "2026-11-09", views: "497K", title: "Ramayana Movie vs Valmiki Ramayan | Fact Check" },
    { id: "50nAp0xuY0E", date: "2026-11-06", views: "1.8M", title: "Ramayana Post-Credit Scene & Ending Explained" },
    { id: "W91hLf4r1rY", date: "2026-11-05", views: "1.6M", title: "Ramayana Movie Review (Spoiler-Free)" },
    { id: "BtuLdsziCPE", date: "2026-11-02", views: "822K", title: "Watch This Before Ramayana Part 1" },
    { id: "ius56OJAEf8", date: "2026-10-29", views: "958K", title: "Why Bhojpuri Songs Are Soo Vulgar?" },
    { id: "qE6W9U6VvqE", date: "2026-10-27", views: "655K", title: "Avengers Doomsday Exclusive Preview Trailer Breakdown" },
    { id: "gUsoCNnDZb4", date: "2026-10-22", views: "951K", title: "Namit Malhotra Just Out-Detail Aditya Dhar" },
    { id: "j5IvJ9lcnEs", date: "2026-10-20", views: "1.3M", title: "Ramayan Biggest Leak Yet! Namit Malhotra's Entire Vision" }
  ],

  // thePJ — the raw, real side of PJ Explained
  thepj: {
    name: "thePJ", handle: "@thepjoffical", url: "https://www.youtube.com/@thepjoffical",
    blurb: "The raw, unfiltered side of PJ Explained — first reactions the moment a trailer drops, no script, no edits.",
    stats: [
      { value: "450K",  label: "subscribers" },
      { value: "174M+", label: "views" },
      { value: "1.06M", label: "top reaction this month" }
    ],
    videos: [
      { id: "UtvAD7AoFS8", date: "2026-10-28", views: "292K",  title: "Jumanji 3 Open World Trailer • Reaction" },
      { id: "6kRZ55k0Eg8", date: "2026-10-27", views: "300K",  title: "The Ramayan Marketing Scam Is Crazy" },
      { id: "Tod4BSBl4_w", date: "2026-10-24", views: "592K",  title: "Avengers Doomsday Exclusive Preview Trailer • Reaction" },
      { id: "oMhu563o3Do", date: "2026-10-24", views: "337K",  title: "Fauzi Glimpse • Reaction" },
      { id: "dvjY-2heJV0", date: "2026-10-24", views: "149K",  title: "I Saw Clayface Movie" },
      { id: "5cDmLn2A0do", date: "2026-10-20", views: "839K",  title: "Ramayana: Ravana Tandav (Song) • Reaction" },
      { id: "pR3jJlXSMm0", date: "2026-10-16", views: "357K",  title: "I Saw Street Fighter Movie" },
      { id: "f9cR6ltgwBA", date: "2026-10-15", views: "1.06M", title: "Ramayana Hindi Trailer • Reaction" }
    ]
  },

  // Brands you've worked with.
  // logo = image link (or a file next to index.html), mono = show it in white, size = "wide" or "tall".
  // No logo? Leave logo "" and the name is set in Trueno instead.
  brands: [
    { name: "Netflix",         mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Prime Video",     mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Prime_Video_logo_%282024%29.svg" },
    { name: "JioHotstar",      mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/JioHotstar_2025.png" },
    { name: "SonyLIV",         mono: false, size: "tall", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png" },
    { name: "Warner Bros.",    mono: false, size: "tall", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Warner_Bros._logo_2023.svg" },
    { name: "DC Studios",      mono: false, size: "tall", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/DC_Studios_logo.svg" },
    { name: "Marvel India",    mono: false, size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" },
    { name: "Crunchyroll",     mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Crunchyroll_2024.svg" },
    { name: "DNEG",            mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/DNEG_2025.svg" },
    { name: "Comic Con India", mono: false, size: "tall", logo: "https://cdn.prod.website-files.com/5f8ef28f39796751fbeb6e26/6a8edacb9a95c61d7c6f1532_CCI%20Logo.svg" },
    { name: "Maruti Suzuki",   mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Maruti_Suzuki_logo.svg" },
    { name: "TVS Motor",       mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/en/e/e9/TVS_Motor_logo.svg" },
    { name: "Lenskart",        mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Lenskart_logo.svg" },
    { name: "Audible India",   mono: true,  size: "wide", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Audible_logo.svg" },
    { name: "WazirX",          mono: true,  size: "wide", logo: "https://wazirx.com/static/wazirx-logo-blue-D6f7vLFB.png" },
    { name: "Kuku FM",         svg: '<svg viewBox="0 0 559 561"><path fill="currentColor" d="M345 506.9c8.9 13.8 34.8 20.2 34.8 38.5v2.5c0 7.6-5.7 12-14.6 12H233.2c-8.8 0-14.5-5-14.5-12.6v-2.6c0-17.6 23.4-22 13.3-37.8l-54.4-84.6c-10.7 1.9-21.5 3.2-33.5 3.2v65c0 29 28.4 36.6 28.4 54.9v2.5c0 7.6-6.3 12-15.2 12H20.3c-8.9 0-15.2-4.4-15.2-12v-2.5c0-18.3 25.3-25.9 25.3-54.9V121.1C30.4 91.4.1 83.2.1 67.5v-2.6c0-6.9 5.6-10.1 14.5-14.5L115.7 3.7c17.7-8.2 28.4 1.3 28.4 13.3v363.7c108.7-9.5 63.8-129.4 140.9-129.4 34.1 0 49.3 20.8 49.3 46.7 0 29-23.4 66.3-68.3 93.4L345 506.9z"/><circle cx="469" cy="471.3" r="89" fill="#ec1c24"/></svg>' },
    { name: "District" },
    { name: "WXM" }
  ],

  collab: ["Sponsored integrations", "Instagram reels and stories", "Film and OTT promotions", "Premieres and press junkets", "Podcast appearances"]
};

/*
  Live data: the auto-updater (scripts/update.mjs, run every few hours on GitHub)
  writes data-live.js, which calls this to lay fresh numbers, videos and reels
  over the values above. If data-live.js is missing, the values above are shown.
*/
function PJ_applyLive(L) {
  if (!L) return;
  if (L.updated) PJ.updated = L.updated;
  for (const k of ["youtube", "instagram"]) if (L[k]) Object.assign(PJ[k], L[k]);
  for (const k of ["totals", "networkTotals", "latest", "pjVideos", "reels"]) if (L[k] && L[k].length) PJ[k] = L[k];
  (L.channels || []).forEach(u => { const c = PJ.channels.find(c => c.handle.toLowerCase() === u.handle.toLowerCase()); if (c) Object.assign(c, u); });
  (L.socials || []).forEach(u => { const s = PJ.socials.find(s => s.logo === u.logo); if (s) Object.assign(s, u); });
  if (L.thepj) { if (L.thepj.stats) PJ.thepj.stats = L.thepj.stats; if (L.thepj.videos && L.thepj.videos.length) PJ.thepj.videos = L.thepj.videos; }
  (L.moctaleStats || []).forEach(u => { const s = PJ.moctale.stats.find(s => s.key === u.key); if (s) Object.assign(s, u); });
}

const ICON = {
  youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none"/></svg>',
  x:         '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.5h2L6.5 3.2H4.3l13.3 17.5z"/></svg>',
  facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3h-1.4c-1.4 0-2 .5-2 2V12h3.3l-.6 3.7h-2.7v8.2C19.4 23.2 24 18.2 24 12 24 5.4 18.6 0 12 0S0 5.4 0 12c0 5.6 3.9 10.4 9.1 11.7z"/></svg>',
  threads:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>',
  snapchat:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3c3 0 5 2.2 5 5.2v2.3l1.8-.6c.6 0 .9.7.4 1.1-.8.6-2.2.9-2.2 1.6 0 1.3 2 3.1 4 3.6-.3.9-1.6 1-2.6 1.2-.3.6-.3 1.4-1 1.4-.8 0-1.8-.4-3 .2-1.1.6-1.6 1.5-2.4 1.5s-1.3-.9-2.4-1.5c-1.2-.6-2.2-.2-3-.2-.7 0-.7-.8-1-1.4-1-.2-2.3-.3-2.6-1.2 2-.5 4-2.3 4-3.6 0-.7-1.4-1-2.2-1.6-.5-.4-.2-1.1.4-1.1l1.8.6V8.2C7 5.2 9 3 12 3z"/></svg>',
  linkedin:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  reddit:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="14.5" rx="8.5" ry="6"/><circle cx="18.5" cy="4.5" r="1.6"/><path d="M12 8.5l1.3-5.2 3.6 1"/><circle cx="8.8" cy="13.8" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.2" cy="13.8" r="1.1" fill="currentColor" stroke="none"/><path d="M9.3 17.2c1.6 1 3.8 1 5.4 0"/></svg>',
  whatsapp:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6L3 21z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1c-1-.4-2.5-1.9-2.9-2.9l1-1-1-2L9 8.5z" fill="currentColor" stroke="none"/></svg>',
  podcast:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/></svg>',
  gaming:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="6"/><path d="M6.5 12h4M8.5 10v4"/><circle cx="15.5" cy="11" r=".6" fill="currentColor"/><circle cx="17.5" cy="13" r=".6" fill="currentColor"/></svg>',
  moctale:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/><path d="M20.2 6L3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3L20.2 6zM6.2 5.3l3.1 3.9M12.4 3.4l3.1 4"/></svg>',
  globe:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  apple:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.8 1.2 1.8 2.6 3.1 2.6 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.5.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-4.1zM14 5.2c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 2.9 1.1.1 2.2-.6 2.9-1.4z"/></svg>',
  android:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 17a8.5 8.5 0 0 1 17 0z"/><path d="M6.5 6.5l2 3M17.5 6.5l-2 3"/><circle cx="8.8" cy="13.6" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="13.6" r=".9" fill="currentColor" stroke="none"/></svg>',
  reel:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><path d="M2.5 8h19M8 2.5l3 5.5M14 2.5l3 5.5"/><path d="M10 11.5v5.5l4.5-2.75z" fill="currentColor" stroke="none"/></svg>',
  check:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.6 2.2 3.4-.4.9 3.3 3 1.7-1.2 3.2 1.2 3.2-3 1.7-.9 3.3-3.4-.4L12 23l-2.6-2.2-3.4.4-.9-3.3-3-1.7L3.3 13 2.1 9.8l3-1.7.9-3.3 3.4.4z"/><path d="M8 12.2l2.7 2.6L16.2 9" fill="none" stroke="#0a0a0a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>',
  play:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  eye:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  mail:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/></svg>'
};

// Official brand icons (Simple Icons), used as masks so they can take any colour
const brandIcon = n => `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${n}.svg`;
const logoMask = (n, cls = "si") => `<span class="${cls}" style="-webkit-mask-image:url(${brandIcon(n)});mask-image:url(${brandIcon(n)})"></span>`;

const thumb = id => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const thumbFallback = "this.onerror=null;this.src=this.src.replace('maxresdefault','hqdefault')";
const watch = id => `https://www.youtube.com/watch?v=${id}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// "Today", "Yesterday", "3d ago", "2w ago", or a date
const ago = d => {
  const days = Math.round((new Date().setHours(0, 0, 0, 0) - new Date(d + "T00:00").getTime()) / 864e5);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return new Date(d + "T00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short" });
};
const updatedLabel = () => {
  const a = ago(PJ.updated);
  return a === "Today" ? "Updated today" : a === "Yesterday" ? "Updated yesterday" : `Updated ${a}`;
};

// On phones, open YouTube links in the YouTube app instead of Instagram's browser
document.addEventListener("click", e => {
  const a = e.target.closest('a[href*="youtube.com"]');
  if (!a) return;
  const ua = navigator.userAgent, android = /Android/i.test(ua), ios = /iPhone|iPad|iPod/i.test(ua);
  if (!android && !ios) return;
  e.preventDefault();
  const web = a.href, path = web.replace(/^https?:\/\//, "");
  if (android) {
    location.href = `intent://${path}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=${encodeURIComponent(web)};end`;
  } else {
    const t = setTimeout(() => { location.href = web; }, 1200);
    window.addEventListener("pagehide", () => clearTimeout(t), { once: true });
    location.href = "youtube://" + path;
  }
});
