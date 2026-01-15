# test-actions
a place to test github actions

## Astro App with GitHub Pages Deployment

This repository demonstrates deploying an Astro site to GitHub Pages with PR preview functionality.

> **📋 First Time Setup?** See [SETUP.md](SETUP.md) for detailed instructions on configuring your repository settings.

### Features

- **Simple Astro app**: A layout template that says "hello <slot>" with a component that fills the slot with "World"
- **Main deployment**: Automatically deploys to GitHub Pages when changes are pushed to the main branch
- **PR preview deployments**: Each pull request gets its own preview deployment, allowing you to browse the site on any device before merging

### Workflow Files

**`.github/workflows/pages.yml`** - Main deployment workflow:
- Builds and deploys the Astro site on pushes to the `main` branch
- Can be manually triggered from the Actions tab
- Deploys to `https://danmarshall.github.io/test-actions/`

**`.github/workflows/pr-preview.yml`** - PR preview workflow:
- Creates a preview deployment for each PR at `/test-actions/pr-[NUMBER]/`
- Comments on PR with the preview URL (perfect for testing on your phone!)
- Automatically cleans up when the PR is closed

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview URLs

- **Production**: https://danmarshall.github.io/test-actions/
- **PR Previews**: https://danmarshall.github.io/test-actions/pr-[NUMBER]/ (where [NUMBER] is the PR number)

### How PR Previews Work

When you open a PR, GitHub Actions will:
1. Build the Astro site with a PR-specific base path
2. Deploy it to a separate directory on the gh-pages branch
3. Comment on the PR with the preview URL
4. Clean up the preview when the PR is closed
