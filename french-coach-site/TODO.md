# French Coach — project handoff and TODO

This file is the working handoff for anyone continuing the French Coach project.
Read it before changing the website, plugin, public listing, or deployment.

## Project purpose

French Coach is a skills-only educational plugin for approximately B2 French
learners. It helps users speak and write more natural French through concise
corrections, idiomatic translations, explanations, conversation practice,
targeted exercises, and reviews.

It is not a certification program, official examiner, or replacement for a
qualified professional in high-stakes contexts.

## Public identity and decisions

| Item | Decision |
| --- | --- |
| Plugin name | French Coach |
| Public developer name | `danieazc` |
| GitHub account | `daniela-zc` |
| Support email | `danieazc@gmail.com` |
| Marketplace category | Education |
| Availability | Worldwide |
| Primary listing language | English |
| Website languages | English and Spanish |
| Visual direction | Elegant, editorial, globally neutral |
| Brand colors | Navy `#102A4C`, ivory `#F6F0E6`, burgundy `#8F2332` |

## Current status

### Completed

- [x] French Coach skill created and packaged as a skills-only plugin.
- [x] Public-scope safeguards added to the skill.
- [x] Plugin metadata, logo, starter prompts, release notes, test-case drafts,
  and listing copy prepared.
- [x] Plugin candidate version set to `1.0.0` and locally validated.
- [x] Bilingual public website created with home, support, privacy, and terms
  pages.
- [x] GitHub Pages website is reported by the project owner as working at
  <https://daniela-zc.github.io/french-coach/>.
- [x] Plugin developer reference added at `docs/french-coach-plugin.md`.

### Not yet completed

- [x] Commit and push the current uncommitted documentation changes.
- [x] Confirm the support, privacy, and terms URLs work on GitHub Pages.
- [ ] Replace older OpenAI Sites URLs in the plugin publication draft with the
  GitHub Pages URLs.
- [ ] Complete OpenAI Platform organization permissions and identity checks.
- [ ] Create a plugin-submission draft in the OpenAI Platform.
- [ ] Run the prepared plugin test cases in the submission workflow.
- [ ] Obtain the owner's explicit final approval before submitting publicly.
- [ ] Submit the plugin and respond to any reviewer feedback.

## Repository and important paths

### Website repository

This directory is the GitHub Pages website source:

```text
/Users/danie/Documents/Codex/2026-08-30/plugin-creator-users-danie-codex-skills/outputs/french-coach-site
```

The site is an Astro static site. It is configured for the repository path
`/french-coach/` and should be deployed from the `main` branch through GitHub
Actions.

Useful commands from the website root:

```sh
npm install
npm run dev
npm test -- --run
npm run check
npm run build
```

Important website files:

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Public home page |
| `src/pages/support.astro` | Support and FAQ page |
| `src/pages/privacy.astro` | Privacy notice |
| `src/pages/terms.astro` | Terms of use |
| `src/layouts/SiteLayout.astro` | Shared metadata and page layout |
| `src/components/` | Reusable presentational components |
| `src/styles/global.css` | Site theme and responsive styling |
| `public/logo.png` | Selected French Coach logo |
| `docs/french-coach-plugin.md` | Developer-facing plugin behavior reference |
| `.github/workflows/deploy.yml` | GitHub Pages deployment workflow |
| `README.md` | Local development and deployment overview |

### Plugin source

```text
../french-coach/
```

Key files:

| Path | Purpose |
| --- | --- |
| `.codex-plugin/plugin.json` | Plugin manifest, currently version `1.0.0` |
| `skills/french-coach/SKILL.md` | Authoritative behavioral instructions |
| `assets/logo.png` | Plugin logo |

### Submission materials

```text
../french-coach-publication/
```

| Path | Purpose |
| --- | --- |
| `listing.md` | Listing metadata, descriptions, prompts, and public URLs |
| `test-cases.md` | Five positive and three boundary test cases |
| `release-notes.md` | Version 1.0.0 release notes |
| `publication-audit.md` | Pre-submission review notes |

## Authoritative plugin behavior

The authoritative source is `../french-coach/skills/french-coach/SKILL.md`.
The website documentation is a readable summary, not a replacement for that
file.

French Coach should:

1. Preserve the learner's intended meaning, tone, and register.
2. Correct genuine grammar and vocabulary errors.
3. Improve understandable but unnatural wording into idiomatic French.
4. Explain one useful point by default, without excessive grammar jargon.
5. Continue appropriate conversations naturally in French.
6. State when a sentence is already correct instead of rewriting it needlessly.
7. Distinguish required corrections from optional stylistic alternatives.

Supported commands are `/correct`, `/natural`, `/explain`, `/translate`,
`/conversation`, `/exercise`, and `/review`.

Important limits:

- Do not claim certification or guaranteed proficiency.
- Do not present one regional French variant as universal.
- Recommend qualified human review for legal, medical, immigration, academic,
  professional, or other high-stakes wording.
- Do not request sensitive personal information for practice examples.

## Website content requirements

The public website should continue to include:

- An English/Spanish explanation of the product.
- The headline: **“French that sounds like you.”**
- Conversation practice, natural phrasing, and clear explanations as core
  capabilities.
- Before/after examples that show naturalness without implying a single
  universal French variety.
- A clear support route with `danieazc@gmail.com`.
- Privacy and terms routes that accurately state there is no plugin-owned
  server, login, analytics, cookie tracking, database, or independent data
  collection.
- Educational and high-stakes-use disclaimers.

Do not add a backend, database, user account system, analytics, tracking,
cookies, or forms without first revisiting the privacy notice and obtaining the
owner's approval.

## GitHub Pages URLs to use

The intended URLs are:

```text
Website:  https://daniela-zc.github.io/french-coach/
Support:  https://daniela-zc.github.io/french-coach/support/
Privacy:  https://daniela-zc.github.io/french-coach/privacy/
Terms:    https://daniela-zc.github.io/french-coach/terms/
```

Before changing public listing materials, open and verify each URL. After they
are confirmed, update `../french-coach-publication/listing.md` to replace any
older `chatgpt.site` or `github.io` placeholder URLs.

## Recommended next steps

### Immediate website work

1. Review `git status`.
2. Run the website test, check, and build commands.
3. Commit the documentation changes:
   - `docs/french-coach-plugin.md`
   - this `TODO.md`
4. Push to the GitHub repository only after the owner approves that external
   change.
5. Verify the GitHub Actions deployment and all four public URLs.

### Prepare the public plugin listing

1. Update `listing.md` with the confirmed GitHub Pages URLs.
2. Re-run the plugin validator:

   ```sh
   PYTHONPATH=/private/tmp/french-coach-validator-deps \
     python3 /Users/danie/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py \
     ../french-coach
   ```

3. Re-run the skill validator:

   ```sh
   PYTHONPATH=/private/tmp/french-coach-validator-deps \
     python3 /Users/danie/.codex/skills/.system/skill-creator/scripts/quick_validate.py \
     ../french-coach/skills/french-coach
   ```

4. Review all test cases in `../french-coach-publication/test-cases.md`.

### OpenAI submission workflow

The submission portal requires a user with the relevant organization permission
(currently labeled Apps Management) and may require identity verification.

The portal needs the plugin package, listing information, skill details,
starter prompts, test cases, country availability, and policy attestations.
French Coach is a skills-only submission; it does not need an MCP server.

Only the owner can:

- Complete identity verification.
- Accept policy and legal attestations.
- Authorize public submission.

Do **not** submit the plugin, publish a draft, alter public availability, or
change legal/privacy claims without explicit approval immediately before the
external action.

## Improvement ideas

Prioritize improvements that strengthen the educational experience without
adding data collection or server complexity:

1. Add more carefully qualified examples for French from France, Québec,
   Belgium, and Switzerland.
2. Expand example scenarios for workplace, travel, friendship, and study
   contexts while preserving privacy-safe examples.
3. Add a concise public changelog to the website or repository.
4. Improve documentation for contributors with screenshots only if they help
   explain real behavior.
5. Consider a custom domain only after the public listing is stable.

Avoid adding claims of certification, language-level assessment, guaranteed
fluency, or universal native correctness.

## Safety and publication boundary

Local edits, tests, builds, and validation are in scope for future work.

The following are external actions and require clear owner confirmation:

- Pushing commits to GitHub.
- Changing GitHub Pages settings or a public URL.
- Creating or modifying an OpenAI Platform submission draft.
- Completing identity verification or accepting attestations.
- Submitting the plugin for public review.
- Disabling the older OpenAI-hosted website.

## Current local working state

At the time this file was created, `docs/french-coach-plugin.md` was an
uncommitted local addition. This file is also new and uncommitted. Inspect
`git status` before committing so unrelated user changes are preserved.
