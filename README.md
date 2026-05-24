# Acervo Rocha

Astro-built static showcase of the collection. Deploys to GitHub Pages on every push to `main`.

## Local development

```sh
npm install
npm run dev
```

Then open http://localhost:4321/collection-site/

## Adding a work

1. Create `src/content/works/<slug>.md` (the file name becomes the URL slug).
2. Drop the photo into `public/images/works/<slug>.jpg`.
3. Fill in the frontmatter:

```yaml
---
title: Composição
artist: Alfredo Volpi
year: "1958"
medium: Tempera on canvas
dimensions: 50 × 73 cm
signature: Signed verso
provenance: Galeria X, São Paulo → Private collection, Rio
acquired: "2026"
image: /images/works/volpi-composicao-1958.jpg
---

Optional longer description / curator's note in Markdown.
```

All fields except `title` and `artist` are optional — leave them out if you don't have them.

## First-time deploy

1. Create a new public GitHub repo named `collection-site`.
2. Update `site` in `astro.config.mjs` to `https://<your-username>.github.io`.
3. Push to `main`.
4. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
5. The next push triggers a build; the site appears at `https://<your-username>.github.io/collection-site/`.

## Custom domain

Add a `CNAME` file at the repo root containing your domain, set DNS as described in [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), and in `astro.config.mjs` set `site: 'https://your-domain.com'` and `base: '/'`.
