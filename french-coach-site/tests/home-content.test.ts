import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('home page content', () => {
  it('contains the approved bilingual product story and safeguards', () => {
    const page = [
      readFileSync('src/pages/index.astro', 'utf8'),
      readFileSync('src/components/ExampleCard.astro', 'utf8'),
    ].join('\n');
    expect(page).toContain('French that sounds like you.');
    expect(page).toContain('Conversation practice');
    expect(page).toContain('Natural phrasing');
    expect(page).toContain('Clear explanations');
    expect(page).toContain('Before');
    expect(page).toContain('After');
    expect(page).toContain('lang="es"');
    expect(page).toMatch(/regional|region/i);
    expect(page).toMatch(/legal, medical, immigration, academic, or professional/i);
  });
});
