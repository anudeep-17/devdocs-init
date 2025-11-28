import { TemplateFile } from '../types';

export function getPersonalOpsTemplates(): TemplateFile[] {
  return [
    {
      path: 'ops/ci-cd.md',
      content: `# CI/CD

Document how you build and deploy {{PROJECT_NAME}}.

- Build steps
- Tests that must pass
- Deployment targets (preview/main)
- Secrets management notes
`
    },
    {
      path: 'ops/environments.md',
      content: `# Environments

List the environments you use.

| Name | URL | Purpose |
| --- | --- | --- |
| Local | http://localhost:3000 | Development |

## Notes
- How to seed data?
- How to reset state?
`
    },
    {
      path: 'ops/runbooks/runbook-api-down.md',
      content: `# Runbook: API Down

Steps to verify and restore the API.

1. Confirm outage: logs, uptime monitor, or local reproduction.
2. Roll back to last known good version if needed.
3. Capture notes for a post-incident follow-up.
`
    }
  ];
}
