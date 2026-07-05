# Portfolio

Personal academic portfolio — About, Research, Publications, Projects, Awards, Education, and Contact — built with React, TypeScript, and Vite.

Live at **https://schatmessenger.github.io/portfolio/**

## Editing content

All page content lives in one file: [`src/data/profile.ts`](src/data/profile.ts). Update the placeholder values there (name, bio, research themes, publications, projects, awards, education, contact links) — nothing else needs to change.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check and build for production
npm run lint     # run eslint
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
