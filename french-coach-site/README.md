# French Coach website

Public, bilingual website for French Coach, an educational plugin for approximately B2 French learners.

## Technology

- Astro static output
- Tailwind CSS v4 theme variables and utilities
- Vitest content and configuration checks
- GitHub Actions deployment to GitHub Pages

The site has no backend, database, authentication, analytics, cookies, or independent data collection.

## Local development

Requires Node.js 22 or a compatible current LTS release.

```sh
npm install
npm run dev
```

The Astro development server prints the local preview URL.

## Quality checks

```sh
npm test -- --run
npm run check
npm run build
```

## Routes

- `/french-coach/`
- `/french-coach/support/`
- `/french-coach/privacy/`
- `/french-coach/terms/`

## Deployment

The Astro configuration targets `https://daniela-zc.github.io/french-coach/`. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` when changes reach the `main` branch or when the workflow is started manually.

Before the first deployment, configure the repository's Pages source as **GitHub Actions**.

Do not push this project, activate GitHub Pages, update marketplace publication URLs, or disable the existing hosted website without explicit approval from the project owner.
