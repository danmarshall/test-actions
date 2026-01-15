# test-actions
a place to test github actions

## Astro Site Deployment

This repository demonstrates how to deploy an Astro site to GitHub Pages using GitHub Actions.

### Workflow File

The workflow is located at `.github/workflows/pages.yml` and will:
- Build the Astro site using Node.js 20 and npm
- Deploy automatically on pushes to the `main` branch
- Can be manually triggered from the Actions tab
- Deploys the built site from the `./dist` directory to GitHub Pages

### Prerequisites

This workflow expects an Astro project with:
- `package.json` with a `build` script
- Astro configured to output to the `./dist` directory
- Node.js dependencies managed via npm

### Setup

To enable GitHub Pages for this repository:
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow will automatically deploy on the next push to main

### Astro Configuration

Make sure your `astro.config.mjs` is configured with the correct site and base:

```javascript
export default defineConfig({
  site: 'https://danmarshall.github.io',
  base: '/test-actions',
});
```
