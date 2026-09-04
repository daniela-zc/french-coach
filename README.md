# French Coach

French Coach is an educational Codex skill for learners who want to write and speak more natural French. It is aimed at approximately B2-level learners and provides concise, practical feedback while preserving the learner's meaning, tone, and register.

The skill supports:

- French conversation practice with lightweight corrections
- Grammar and vocabulary correction
- More natural and idiomatic rewrites
- English-to-French and Spanish-to-French translation
- Focused explanations, exercises, and review of recurring patterns

French Coach is a language-practice and writing-support tool. It does not certify proficiency, and important legal, medical, immigration, academic, or professional wording should be reviewed by a qualified person.

## Repository structure

```text
.
├── french-coach/              # Installable Codex skill
├── french-coach-publication/  # Marketplace copy, release notes, and audit materials
└── french-coach-site/         # Public Astro website and a packaged copy of the skill
```

Key files:

- [`french-coach/skills/french-coach/SKILL.md`](french-coach/skills/french-coach/SKILL.md) defines the coaching behavior.
- [`french-coach-publication/listing.md`](french-coach-publication/listing.md) contains the public listing draft.
- [`french-coach-publication/release-notes.md`](french-coach-publication/release-notes.md) contains the current release notes.
- [`french-coach-publication/publication-audit.md`](french-coach-publication/publication-audit.md) records the publication-readiness review.
- [`french-coach-site/README.md`](french-coach-site/README.md) documents the website in more detail.

## Website development

The public site is a static Astro project using Tailwind CSS. It requires Node.js 22 or a compatible current LTS release.

```sh
cd french-coach-site
npm install
npm run dev
```

The development server prints the local preview URL.

## Quality checks

Run the website checks from `french-coach-site/`:

```sh
npm test -- --run
npm run check
npm run build
```

These commands run the Vitest suite, Astro and TypeScript validation, and the production build.

## Public website

- Website: <https://daniela-zc.github.io/french-coach/>
- Support: <https://daniela-zc.github.io/french-coach/support/>
- Privacy: <https://daniela-zc.github.io/french-coach/privacy/>
- Terms: <https://daniela-zc.github.io/french-coach/terms/>

The site has no backend, database, authentication, analytics, cookies, or independent data collection.

## Release workflow

Publication materials are maintained in `french-coach-publication/`. Before publishing a release, review the listing, release notes, test cases, and publication audit together so that marketplace claims stay aligned with the packaged skill and website.

The website is configured for GitHub Pages deployment. See the [website README](french-coach-site/README.md#deployment) for deployment details and project-owner approval requirements.
