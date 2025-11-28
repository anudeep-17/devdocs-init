import { TemplateFile } from '../types';

export function getCollegeQATemplates(): TemplateFile[] {
  return [
    {
      path: 'qa/test-plan-release-1.md',
      content: `# Test Plan — Release 1

Summarize test coverage for interim submissions.

## Scope
Which features are in scope for this release?

## Test Types
- Unit tests
- Integration/system tests
- Manual acceptance tests

## Responsibilities
Who writes and runs the tests?
`
    }
  ];
}
