import { TemplateFile } from '../types';

export function getFreelanceArchitectureTemplates(): TemplateFile[] {
  return [
    {
      path: 'architecture/overview.md',
      content: `# Architecture Overview — {{PROJECT_NAME}}

Provide a client-friendly overview of the solution.

## Context
- Who are the users?
- What systems do we integrate with?

## High-Level Design
- Frontend tech and hosting
- Backend tech and hosting
- Data storage and backups

## Quality Attributes
Performance, security, compliance, and maintainability goals.
`
    },
    {
      path: 'architecture/security-and-auth.md',
      content: `# Security & Authentication

Summarize the approach to protecting client data.

- Authentication method
- Authorization model and roles
- Data protection (encryption, backups)
- Compliance considerations (e.g., GDPR)
`
    },
    {
      path: 'architecture/diagrams/README.md',
      content: `# Diagrams

Include architecture, sequence, and deployment diagrams for client reviews. Update when scope changes.
`
    }
  ];
}
