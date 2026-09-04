import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('site foundation', () => {
  it('configures the GitHub Pages site and base path', () => {
    const config = readFileSync('astro.config.mjs', 'utf8');
    expect(config).toContain("site: 'https://daniela-zc.github.io'");
    expect(config).toContain("base: '/french-coach'");
  });
});
