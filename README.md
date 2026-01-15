# test-actions
a place to test github actions

## Astro App with GitHub Pages Deployment

> **📋 First Time Setup?** See [SETUP.md](SETUP.md) for detailed instructions on configuring your repository settings.

This repository contains a simple Astro application that demonstrates:
- A layout template that says "hello <slot>"
- A component that fills the slot with "World"
- GitHub Actions workflows for automated deployment

### Features

1. **Main Branch Deployment**: Automatically deploys to GitHub Pages when changes are pushed to the main branch
2. **PR Preview Deployments**: Each pull request gets its own preview deployment, allowing you to browse the site on any device before merging

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
