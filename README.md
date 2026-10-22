# pjexplained.com

PJ Explained's website — the home page (`index.html`) and the Instagram link page (`links/index.html`).

- **All content** (text, links, brands, channels, base numbers) lives in [`data.js`](data.js). Edit it on GitHub and the site updates in a minute or two.
- **Live numbers, videos and reels** are refreshed every 3 hours by [`scripts/update.mjs`](scripts/update.mjs), run by [`.github/workflows/update.yml`](.github/workflows/update.yml). It writes `data-live.js` and `live.json` — don't edit those by hand.
- **Hosting:** GitHub Pages with the custom domain in [`CNAME`](CNAME).
- **Setup steps:** see [`SETUP.md`](SETUP.md).

Font: Trueno only ([`trueno.css`](trueno.css)).
