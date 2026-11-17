# voxletra.github.io

The public Astro marketing site for **Voxletra**.

Speech-to-text, text-to-speech, and translation through thin, explicit client boundaries.

## Development

Use Node.js 22.22.1 or newer.

```sh
npm ci
npm run dev
npm run build
```

Astro writes the production site to `dist/`. The committed GitHub Actions workflow builds pull requests and deploys the default branch to GitHub Pages.

## Search discovery

The static build now publishes `robots.txt` and a one-page `sitemap.xml` using Astro's configured `site` origin (`PUBLIC_SITE_URL` or the default). Update the sitemap when introducing additional public routes; never list private app or admin URLs.

## Content standard

Public claims must remain traceable to the organization's repositories, documentation, or planning context. Do not publish credentials, customer data, private operational details, or unreviewed legal language from this public repository.
