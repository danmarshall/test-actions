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

**Note:** This workflow requires Astro project files to be present in the repository.

The workflow expects:
- `package.json` with Astro dependency and a `build` script
- `astro.config.mjs` configured with the correct site and base
- Astro source files in the `src/` directory
- Node.js dependencies managed via npm

### Setup

1. **Add Astro Project Files**: Ensure your repository contains the Astro project structure (see Prerequisites above)

2. **Configure Astro**: Make sure your `astro.config.mjs` includes:
   ```javascript
   export default defineConfig({
     site: 'https://<username>.github.io',
     base: '/<repository-name>',
   });
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on the next push to main
