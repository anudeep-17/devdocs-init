import { TemplateFile } from '../types';

export function getPersonalProcessTemplates(): TemplateFile[] {
  return [
    {
      path: 'process/ways-of-working.md',
      content: `# Ways of Working

Document how you maintain {{PROJECT_NAME}}.

## Branching & Commits
- Branch naming convention
- Commit message style

## Workflow
- How do you pick tasks?
- When do you write tests?
- How do you track ideas?
`
    },
    {
      path: 'process/definition-of-done.md',
      content: `# Definition of Done

A quick checklist before merging or releasing.

- [ ] Code builds locally
- [ ] Tests updated/added
- [ ] Docs updated (including this folder)
- [ ] Manual sanity check run
`
    },
    {
      path: 'process/branching-strategy.md',
      content: `# Branching Strategy

Describe how you keep the repo clean.

- Main branch expectations
- Feature branches and naming
- How often you rebase/merge
- Release tagging notes
`
    }
  ];
}
