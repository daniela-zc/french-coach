import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('GitHub Pages deployment', () => {
  it('builds and deploys a Pages artifact with official actions', () => {
    const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
    expect(workflow).toContain('pages: write');
    expect(workflow).toContain('id-token: write');
    expect(workflow).toContain('actions/checkout@v4');
    expect(workflow).toContain('actions/setup-node@v4');
    expect(workflow).toContain('actions/configure-pages@v5');
    expect(workflow).toContain('actions/upload-pages-artifact@v3');
    expect(workflow).toContain('actions/deploy-pages@v4');
    expect(workflow).toContain('npm ci');
    expect(workflow).toContain('npm run build');
  });
});
