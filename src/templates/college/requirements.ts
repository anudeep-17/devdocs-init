import { TemplateFile } from '../types';

export function getCollegeRequirementsTemplates(): TemplateFile[] {
  return [
    {
      path: 'requirements/requirements.md',
      content: `# Requirements — {{PROJECT_NAME}}

Organize requirements so they can be included in a report.

## Functional Requirements
- Feature or capability
- Acceptance conditions

## Non-Functional Requirements
- Performance targets
- Accessibility standards
- Compliance or academic guidelines

## Traceability
Map requirements to tests or report sections.
`
    }
  ];
}
