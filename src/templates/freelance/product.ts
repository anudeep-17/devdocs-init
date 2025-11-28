import { TemplateFile } from '../types';

export function getFreelanceProductTemplates(): TemplateFile[] {
  return [
    {
      path: 'product/vision.md',
      content: `# Product Vision — {{PROJECT_NAME}}

Clarify the business goals for {{CLIENT_NAME}} at {{CLIENT_COMPANY}}.

## Objectives
- Primary objective
- Success metrics

## Target Users
Who benefits from this release?

## Business Impact
How does this align with the client's strategy?

## Key Dates
- Project start: {{PROJECT_START_DATE}}
- Expected launch: {{EXPECTED_LAUNCH_DATE}}
`
    },
    {
      path: 'product/scope-and-deliverables.md',
      content: `# Scope & Deliverables

Document what is in and out of scope to manage expectations.

## In Scope
- Feature list with brief descriptions

## Out of Scope
- Items explicitly excluded from this engagement

## Deliverables
- Code, documentation, training, deployment details

## Milestones
- Milestone name — deliverable — date
`
    },
    {
      path: 'product/stakeholders.md',
      content: `# Stakeholders

## Client
- Company: {{CLIENT_COMPANY}}
- Primary contact / Product Owner: {{CLIENT_NAME}}
- Sponsor / Decision Maker: <name>

## Delivery Team
- Developer(s):
- Designer:
- Project Manager / Coordinator:

## Communication
- Channels and cadence for updates
`
    }
  ];
}
