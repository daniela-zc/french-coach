import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

describe('GitHub Pages deployment', () => {
  it('builds and deploys a Pages artifact with official actions', () => {
    const workflowPath = fileURLToPath(
      new URL('../../.github/workflows/deploy.yml', import.meta.url),
    );
    const workflow = readFileSync(workflowPath, 'utf8');
    expect(workflow).toContain('pages: write');
    expect(workflow).toContain('id-token: write');
    expect(workflow).toContain('actions/checkout@v4');
    expect(workflow).toContain('actions/setup-node@v4');
    expect(workflow).toContain('cache-dependency-path: french-coach-site/package-lock.json');
    expect(workflow).toContain('actions/configure-pages@v5');
    expect(workflow).toContain('actions/upload-pages-artifact@v3');
    expect(workflow).toContain('actions/deploy-pages@v4');
    expect(workflow).toContain('working-directory: french-coach-site');
    expect(workflow).toContain('npm ci');
    expect(workflow).toContain('npm run build');
    expect(workflow).toContain('path: french-coach-site/dist');
  });
});
