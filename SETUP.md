# Repository Setup Guide

This guide will help you configure your GitHub repository to enable GitHub Pages deployment and PR previews.

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/danmarshall/test-actions`
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions" (not "Deploy from a branch")
   - This allows the workflows to deploy directly

## Step 2: Configure Repository Permissions

You need to ensure GitHub Actions has the right permissions:

1. Still in **Settings**, click on **Actions** in the left sidebar
2. Click on **General** under Actions
3. Scroll down to **Workflow permissions**
4. Select **"Read and write permissions"**
5. Check the box for **"Allow GitHub Actions to create and approve pull requests"**
6. Click **Save**

## Step 3: Merge This PR

This first PR sets up the Astro application and GitHub Actions workflows:
- Merge this PR to the `main` branch
- The main deployment workflow will automatically run
- After a few minutes, your site will be live at: `https://danmarshall.github.io/test-actions/`

## Step 4: Test PR Previews (After Merging)

Once this PR is merged:
1. Create a new branch and make any change (e.g., modify the text in `src/pages/index.astro`)
2. Open a pull request
3. The PR preview workflow will:
   - Build the site with a PR-specific path
   - Deploy it to `gh-pages` branch in a `pr-[NUMBER]` directory
   - Comment on the PR with the preview URL
4. You can visit the preview URL on your phone or any device
5. When you close/merge the PR, the preview is automatically cleaned up

## Troubleshooting

### If the deployment workflow fails:

**Check GitHub Pages Source**:
- Make sure "Source" is set to "GitHub Actions" in Settings → Pages
- If it's set to "Deploy from a branch", change it to "GitHub Actions"

**Check Workflow Permissions**:
- Verify that Actions have "Read and write permissions"
- Settings → Actions → General → Workflow permissions

### If PR preview fails:

**First PR Note**: The PR preview workflow uses the `gh-pages` branch which is created by the first successful deployment to main. So PR previews will only work after you've merged this initial PR and the main deployment has run successfully.

**Token Permissions**: The workflow uses `GITHUB_TOKEN` which should have sufficient permissions if you've configured "Read and write permissions" in Actions settings.

## How It Works

### Main Deployment (`deploy.yml`)
- Triggers on push to `main` branch
- Builds the Astro site with base path `/test-actions`
- Deploys to GitHub Pages using the official `actions/deploy-pages` action
- Creates/updates the `gh-pages` branch automatically

### PR Preview Deployment (`pr-preview.yml`)
- Triggers on PR open, update, or close
- Builds the site with PR-specific base path `/test-actions/pr-[NUMBER]`
- Uses `peaceiris/actions-gh-pages` to deploy to a subdirectory
- Comments on the PR with the preview URL
- Cleans up the preview directory when PR is closed

## Testing Locally

To test the site locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
test-actions/
├── .github/
│   └── workflows/
│       ├── deploy.yml        # Main branch deployment
│       └── pr-preview.yml    # PR preview deployment
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Layout template with "hello <slot>"
│   └── pages/
│       └── index.astro       # Main page with "World"
├── public/                   # Static assets
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript config
```

## Notes

- **Base Path**: The site is configured to work at `/test-actions` path
- **PR Previews**: Each PR gets deployed to `/test-actions/pr-[NUMBER]/`
- **Mobile Testing**: The preview URLs work on any device, perfect for testing on phones
- **Auto Cleanup**: PR previews are automatically removed when PRs are closed or merged

## Next Steps

After merging this PR:
1. Wait for the deployment workflow to complete (~2-3 minutes)
2. Visit `https://danmarshall.github.io/test-actions/` to see "hello World"
3. Create a test PR to see the preview deployment in action
4. Check your phone to browse the preview site!
