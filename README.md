# cocreiamo-www

Static site for **cocreiamo.com**: a minimal presence page for the venture.

Same architecture as `iambilotta-www` (Eleventy v3 + Cloudflare Pages), stripped to
the essentials: one page, no blog, no feed, no tracking.

## Stack

Eleventy (11ty) v3, Nunjucks layout, plain CSS. No server, no database, no framework.

## How it works

`src/index.njk` is the single page; `src/_includes/base.njk` is the layout;
`src/assets/` is passthrough-copied. `eleventy.config.js` maps `src` -> `_site`.

`npm run build` -> `_site/`. `npm run dev` for live reload.

## Deploy

**Cloudflare Pages**, git-connected: a push to `main` triggers a Cloudflare build.
Build command `npm run build`, output dir `_site`, Node 22+.
No GitHub Actions, no `wrangler`, no secrets in this repo.

## Notes

This is a holding page, deliberately minimal. The venture strategy is NOT duplicated
here: it lives in `~/knowledge/entities/cocreiamo.md`. The brand wall is intentional:
the venture carries no active social; the person (iambilotta.com) is the public voice.
