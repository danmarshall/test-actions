# test-actions
a place to test github actions

## GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages.

### Workflow File

The workflow is located at `.github/workflows/pages.yml` and will:
- Deploy automatically on pushes to the `main` branch
- Can be manually triggered from the Actions tab
- Deploys the repository contents to GitHub Pages

### Setup

To enable GitHub Pages for this repository:
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow will automatically deploy on the next push to main
