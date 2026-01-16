# Copilot Instructions for test-actions Repository

## PR Preview Links

When working on PRs in this repository, always include the PR preview link in your PR description or initial comment.

The PR preview URL follows this pattern:
```
https://danmarshall.github.io/test-actions/pr-preview/pr-{PR_NUMBER}
```

Replace `{PR_NUMBER}` with the actual PR number.

### Example

For PR #5, the preview link would be:
```
https://danmarshall.github.io/test-actions/pr-preview/pr-5
```

### When to Include the Link

- Include the PR preview link in the PR description when creating or updating a PR
- Add it as a prominent section in the PR description, such as:
  ```markdown
  ## 🔍 PR Preview
  
  View the preview of this PR at: https://danmarshall.github.io/test-actions/pr-preview/pr-5
  ```
  (Replace `pr-5` with the actual PR number)

### Note

The PR preview will be available after the "PR Preview" workflow completes successfully. If the workflow requires approval (for bot-initiated PRs), the preview will be available after approval and successful deployment.
