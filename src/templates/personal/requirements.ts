import { TemplateFile } from '../types';

export function getPersonalRequirementsTemplates(): TemplateFile[] {
  return [
    {
      path: 'requirements/user-stories.md',
      content: `# User Stories

Capture the behavior you want to support.

## Stories
- As a <persona>, I want <goal> so that <outcome>.
- Add acceptance notes when useful.
`
    },
    {
      path: 'requirements/non-functional-requirements.md',
      content: `# Non-Functional Requirements

List qualities you care about for {{PROJECT_NAME}}.

- Performance: target response times or bundle sizes.
- Accessibility: minimum level you aim for.
- Reliability: uptime expectations.
- Security/Privacy: any considerations.
`
    }
  ];
}
