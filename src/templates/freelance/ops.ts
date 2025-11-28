import { TemplateFile } from '../types';

export function getFreelanceOpsTemplates(): TemplateFile[] {
  return [
    {
      path: 'ops/ci-cd.md',
      content: `# CI/CD & Releases

Outline how builds and deployments happen for {{PROJECT_NAME}}.

- Branching and release cadence
- Environments (dev/stage/prod) and URLs
- Approvals required before production
- Rollback plan
`
    },
    {
      path: 'ops/monitoring-and-alerting.md',
      content: `# Monitoring & Alerting

Define how reliability will be observed post-launch.

- Metrics to watch (availability, latency, errors)
- Alert channels and owners
- Runbooks for common incidents
`
    },
    {
      path: 'ops/runbooks/runbook-api-down.md',
      content: `# Runbook: API Down

1. Verify outage via monitoring or logs.
2. Communicate status to {{CLIENT_NAME}} with ETA.
3. Mitigate: restart service, roll back, or switch traffic.
4. Record timeline for post-incident review.
`
    },
    {
      path: 'ops/incident-reports/0000-00-00-example-incident.md',
      content: `# Incident Report — YYYY-MM-DD

## Summary
Briefly describe what happened and user impact.

## Timeline
- HH:MM — detection
- HH:MM — mitigation steps
- HH:MM — resolution

## Root Cause
What caused the incident?

## Follow-ups
- Action item — owner — due date
`
    }
  ];
}
