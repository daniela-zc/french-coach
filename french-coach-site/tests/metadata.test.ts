import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('metadata and recovery', () => {
  it('provides canonical and Open Graph metadata', () => {
    const layout = readFileSync('src/layouts/SiteLayout.astro', 'utf8');
    expect(layout).toContain('rel="canonical"');
    expect(layout).toContain('property="og:title"');
    expect(layout).toContain('property="og:description"');
    expect(layout).toContain('property="og:url"');
  });

  it('publishes crawler and sitemap guidance', () => {
    const config = readFileSync('astro.config.mjs', 'utf8');
    const robots = readFileSync('public/robots.txt', 'utf8');
    expect(config).toContain('sitemap()');
    expect(robots).toContain('https://daniela-zc.github.io/french-coach/sitemap-index.xml');
  });

  it('provides a branded 404 route back home', () => {
    const notFound = readFileSync('src/pages/404.astro', 'utf8');
    expect(notFound).toContain('Page not found');
    expect(notFound).toContain("withBase('/')");
  });
});
