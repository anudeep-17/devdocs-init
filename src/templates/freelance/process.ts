import { TemplateFile } from '../types';

export function getFreelanceProcessTemplates(): TemplateFile[] {
  return [
    {
      path: 'process/communication-cadence.md',
      content: `# Communication Cadence

Define how progress is shared with {{CLIENT_COMPANY}}.

- Weekly/bi-weekly status meetings
- Channels (email, Slack, project board)
- Reporting format (demo, summary notes, metrics)
`
    },
    {
      path: 'process/change-request-process.md',
      content: `# Change Request Process

Explain how scope changes are proposed and approved.

1. Capture request details (who, what, why).
2. Estimate impact on scope, budget, and timeline.
3. Obtain written approval before starting.
4. Update roadmap and deliverables list.
`
    },
    {
      path: 'process/acceptance-and-signoff.md',
      content: `# Acceptance & Sign-off

Clarify how deliverables are accepted by {{CLIENT_NAME}}.

## Criteria
- Acceptance tests or demos required
- Documentation expectations
- Performance benchmarks

## Sign-off
- Who signs off and how (email, ticket comment, formal doc)
`
    },
    {
      path: 'process/ways-of-working.md',
      content: `# Ways of Working

Describe how the delivery team collaborates.

- Branching and release strategy
- Issue tracking links
- Definition of Ready / Definition of Done
- Meeting rhythm with client and internal team
`
    }
  ];
}
