import { TemplateFile } from '../types';

export function getPersonalAdrTemplates(): TemplateFile[] {
  return [
    {
      path: 'adr/ADR-001-example.md',
      content: `# ADR-001 Example Decision

## Context
What decision do you need to make? What options exist?

## Decision
State the choice and reasoning.

## Consequences
- Positive outcomes
- Risks or follow-ups
`
    }
  ];
}
