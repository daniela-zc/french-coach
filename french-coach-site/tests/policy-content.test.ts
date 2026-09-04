import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const readPage = (name: string) => readFileSync(`src/pages/${name}.astro`, 'utf8');

describe('support and policy content', () => {
  it('provides bilingual support topics and contact details', () => {
    const support = readPage('support');
    expect(support).toContain('danieazc@gmail.com');
    expect(support).toContain('lang="en"');
    expect(support).toContain('lang="es"');
    expect(support).toMatch(/regional/i);
    expect(support).toMatch(/privacy/i);
  });

  it('states the plugin privacy boundaries', () => {
    const privacy = readPage('privacy');
    for (const term of ['server', 'login', 'analytics', 'cookies', 'database', 'data collection', 'OpenAI']) {
      expect(privacy.toLowerCase()).toContain(term.toLowerCase());
    }
    expect(privacy).toContain('lang="es"');
  });

  it('states educational, certification, and high-stakes limitations', () => {
    const terms = readPage('terms');
    expect(terms).toMatch(/educational/i);
    expect(terms).toMatch(/certification/i);
    expect(terms).toMatch(/legal, medical, immigration, academic, or professional/i);
    expect(terms).toContain('lang="es"');
  });
});
