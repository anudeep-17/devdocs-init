import { TemplateFile } from '../types';

export function getFreelanceAdrTemplates(): TemplateFile[] {
  return [
    {
      path: 'adr/ADR-001-example.md',
      content: `# ADR-001 Example Decision

## Context
What decision affects the client (e.g., hosting provider, database choice)?

## Decision
Document the selected option and reasoning.

## Consequences
- Impact on cost, timeline, or maintenance
- Follow-up actions and owners
`
    }
  ];
}
