import { TemplateFile } from '../types';

export function getFreelanceRequirementsTemplates(): TemplateFile[] {
  return [
    {
      path: 'requirements/user-stories.md',
      content: `# User Stories

Capture user-facing requirements with business value.

| ID | As a... | I want... | So that... | Acceptance |
| --- | --- | --- | --- | --- |
| US-001 | | | | |
`
    },
    {
      path: 'requirements/non-functional-requirements.md',
      content: `# Non-Functional Requirements

Agree on quality expectations with {{CLIENT_NAME}}.

- Performance targets (e.g., response times, lighthouse scores)
- Availability expectations / SLA
- Security requirements
- Analytics or observability needs
`
    }
  ];
}
