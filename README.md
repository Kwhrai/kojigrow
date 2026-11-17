# KOJIGROW

An English-language editorial website published by ORYZAE. Initial release contains the publication introduction, editor biography, and upcoming editorial themes. It contains no articles, newsletter signup backend, tracking, or invented editor photograph.

## Preview

Run `npm run dev` and open http://localhost:4173.

## Cloudflare

Run `npm install`, authenticate with `npx wrangler login`, then `npm run deploy`. The configured Worker serves the `public` directory directly. No build step is required. Alternatively connect this repository in Cloudflare Workers Builds with deploy command `npx wrangler deploy`.

## Editing

- `public/index.html`: page structure and content
- `public/style.css`: responsive design and color palette
- `public/site.js`: native sharing / clipboard fallback
- `wrangler.jsonc`: Cloudflare deployment configuration

Palette: sand `#F5F1E8`, ocean `#254C52`, orange `#D45A24`.
Google Fonts are optional progressive enhancements; system serif and sans-serif fallbacks work without them. All article-like sections are explicitly future editorial topics, with no article links or empty article routes.
