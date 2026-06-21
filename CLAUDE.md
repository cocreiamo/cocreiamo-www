# `www` (cocreiamo.com)

Tactical workspace for the site `cocreiamo.com`: a minimal presence page for the venture.
Lives under the `cocreiamo/` workspace (see `~/workspaces/cocreiamo/`).

## Scope and source-of-truth split

This repo is **tactical only**: how the site is built and shipped.
Venture strategy (model, positioning, offer) lives in knowledge and is never duplicated here:
`~/knowledge/entities/cocreiamo.md`.
If a fact is "what the venture is / how it sells", it belongs in the entity, not here.

## Stack

Static site: **Eleventy (11ty) v3**, one Nunjucks layout, one page, plain CSS.
No server, no database, no framework, no blog, no feed, no analytics. Deliberately minimal.

## Deploy

**Cloudflare Pages**, git-connected: push to `main` -> Cloudflare build.
Build command `npm run build`, output dir `_site`, Node 22+.
No GitHub Actions, no `wrangler`, no secrets in this repo.

## Anti-patterns (do not)

Duplicate venture strategy from the entity into this repo.
Add a blog/feed/analytics/framework "while we're here": this is a holding page by design.
Put the persona's voice or social here: the brand wall (venture vs person) is intentional.

## Pointers

- Venture strategy: `~/knowledge/entities/cocreiamo.md`
- Infra (DNS, Cloudflare, GCP) for the cocreiamo estate: `~/workspaces/cocreiamo/infra/`
