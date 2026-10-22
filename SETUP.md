# pjexplained.com — live karne ka step-by-step guide

Sab kuch free hai. Kul milake ~1 ghanta lagega (domain ka DNS update hone mein thoda zyada).
Har step ke baad Claude ko bata dena "step X ho gaya", wo agla karwa dega.

| Kya | Kahan |
|---|---|
| Code + auto-updater | GitHub repository |
| Website hosting | GitHub Pages (free, HTTPS ke saath) |
| Domain | Aapka registrar (jahan se pjexplained.com liya) |
| YouTube numbers | Google Cloud — free API key |
| Instagram + Facebook numbers | Meta (Facebook) — ek baar ka token |

---

## Step 1 — GitHub account aur repository

1. https://github.com par account banao (pehle se hai to login karo).
2. Upar right mein **+** → **New repository**.
3. Repository name: `pjexplained-site` · **Public** select karo · README / .gitignore kuch mat jodo.
4. **Create repository** dabao aur page ka link (jaise `https://github.com/aapka-username/pjexplained-site`) Claude ko bhej do.

## Step 2 — Code upload (Claude karega)

Claude aapke computer se code GitHub par bhejega. Ek browser window khulegi jisme GitHub login maanga jayega — **login aap khud karna**.

## Step 3 — GitHub Pages chalu karo

1. Repository → **Settings** → left mein **Pages**.
2. *Build and deployment* → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.
3. *Custom domain* mein `pjexplained.com` likho → **Save**.

## Step 4 — Domain ko GitHub se jodo

Jahan se domain liya hai (GoDaddy / Hostinger / Namecheap / Google Domains…) wahan **DNS settings** kholo aur ye records daalo (purane `@` A records aur `www` record hata do):

| Type | Name / Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `aapka-username.github.io` |

DNS update hone mein 10 minute se 24 ghante lag sakte hain. Jab GitHub Pages wale page par green tick aa jaye, **Enforce HTTPS** tick kar do.

## Step 5 — YouTube API key (live YouTube numbers aur videos)

1. https://console.cloud.google.com kholo (aapke Google account se).
2. Upar project dropdown → **New project** → naam `pjexplained-site` → Create.
3. Left menu → **APIs & Services → Library** → "YouTube Data API v3" search karo → **Enable**.
4. **APIs & Services → Credentials → Create credentials → API key**.
5. Key par click → *API restrictions* → **Restrict key** → sirf "YouTube Data API v3" chuno → **Save**.
6. Key copy karo. GitHub repository → **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `YT_API_KEY` · Secret: wo key → **Add secret**.

> Key kabhi kisi ko chat/email mein mat bhejna — sirf GitHub Secrets mein daalna.

## Step 6 — Pehli baar updater chalao

Repository → **Actions** tab → (pehli baar "I understand… enable" dabana pad sakta hai) → **Update live data** → **Run workflow**.
1–2 minute mein green tick aayega aur website par naye YouTube numbers/videos dikhne lagenge. Iske baad ye **har 3 ghante mein apne aap** chalega.

## Step 7 — Instagram + Facebook (live followers aur reels)

Ye thoda lamba hai, par ek hi baar karna hai. Claude har screen par saath dega.

1. **Instagram ko Professional banao**: Instagram app → Settings → *Account type and tools* → **Switch to professional account** (Creator). Phir apna **PJ Explained Facebook Page** link karo (Page settings → Linked accounts → Instagram).
2. **Business portfolio**: https://business.facebook.com → apna business banao/kholo → *Settings → Accounts* mein Page aur Instagram account dono add karo.
3. **App banao**: https://developers.facebook.com → **My Apps → Create App** → type **Business** → apne business portfolio se jodo.
4. **Never-expiring token**: business.facebook.com → *Settings → Users → System users* → **Add** (role: Admin) → **Assign assets**: Page (full control), Instagram account, aur wo App → **Generate new token** → App chuno → Expiration: **Never** → permissions tick karo:
   `instagram_basic`, `pages_show_list`, `pages_read_engagement`, `business_management` → token copy karo.
5. GitHub Secrets mein daalo: `META_TOKEN` = wo token.
6. **IDs nikalo**: https://developers.facebook.com/tools/explorer → token paste karo → query: `me/accounts?fields=id,name,instagram_business_account` → **Submit**.
   - Page ka `id` → secret `FB_PAGE_ID`
   - `instagram_business_account.id` → secret `IG_USER_ID`
7. Actions → **Update live data → Run workflow** dobara chalao.

## Step 8 (optional) — Threads followers

Threads ka alag token lagta hai. Baad mein chahiye to Claude se bolo.

---

## Kya apne aap update hoga, kya haath se

| Apne aap (har 3 ghante) | Haath se (data.js mein) |
|---|---|
| Saare 7 YouTube channels ke subscribers, views, videos | X (Twitter) followers |
| PJ Explained aur thePJ ki latest videos + views | Play Store downloads aur rating |
| Instagram followers, posts, latest reels + photos | Moctale ka App Store rank, @moctale.in followers |
| Facebook Page followers | Brands, bio, email, collab list, text |
| Moctale App Store rating | |
| Totals (5.3M+, 2.5B+ …) aur "Updated today" | |

## Baad mein website mein change kaise karein

- **Chhota change (text, link, number, brand, email):** GitHub par `data.js` kholo → pencil ✏️ icon → badlo → **Commit changes**. 1–2 minute mein site update.
- **Design / naya section:** Claude Code app mein `pjexplained-site` folder kholo aur bata do kya chahiye. Claude files badal ke GitHub par bhej dega.
- **Galti ho gayi?** GitHub mein har change ki history hai — koi bhi purana version wapas laaya ja sakta hai.

## Kuch gadbad lage to

- Actions mein laal ❌ dikhe → us run ko kholo → error ka screenshot Claude ko bhejo.
- Koi source fail ho jaye (jaise Instagram), tab bhi site par **pichle sahi numbers** dikhte rahenge — kabhi khaali nahi hoga.
