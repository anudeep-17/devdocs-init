import { TemplateFile } from '../types';

export function getCollegeArchitectureTemplates(): TemplateFile[] {
  return [
    {
      path: 'architecture/overview.md',
      content: `# Architecture Overview — {{PROJECT_NAME}}

Summarize the system for a project report.

## Context Diagram
Describe the external actors and systems. Add a diagram in /docs/architecture/diagrams.

## Logical Architecture
- Modules or layers
- Responsibilities and data flow

## Physical Architecture
- Deployment targets
- Environments used for demonstrations

## Rationale
Explain how the design satisfies assignment goals and constraints.
`
    },
    {
      path: 'architecture/security-and-auth.md',
      content: `# Security & Authentication

Document how data is protected.

- Authentication method (e.g., JWT, session)
- Authorization rules
- Data privacy considerations
- Academic or institutional policies that apply
`
    },
    {
      path: 'architecture/diagrams/README.md',
      content: `# Diagrams

Store exported diagrams (PNG/SVG). Include captions and version/date when updating.
`
    }
  ];
}
