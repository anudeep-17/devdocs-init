import { TemplateFile } from '../types';

export function getCollegeProcessTemplates(): TemplateFile[] {
  return [
    {
      path: 'process/ways-of-working.md',
      content: `# Ways of Working

Describe team collaboration for {{PROJECT_NAME}}.

## Roles & Responsibilities
List who leads which area (frontend, backend, report writing, QA).

## Meetings
- Standups or check-ins schedule
- Instructor/TA meetings

## Artifacts
Where do you keep meeting minutes, assignment notes, and version history?
`
    },
    {
      path: 'process/definition-of-ready.md',
      content: `# Definition of Ready

Before starting a task, ensure:
- Requirements are clear
- Acceptance criteria exist
- Dependencies are identified
- Workload fits within the sprint/iteration
`
    },
    {
      path: 'process/definition-of-done.md',
      content: `# Definition of Done

Before submitting or demoing:
- [ ] Code compiles and basic tests pass
- [ ] Documentation/report updated
- [ ] Demo steps rehearsed
- [ ] Accessibility and academic guidelines met
`
    }
  ];
}
