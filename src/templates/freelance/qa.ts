import { TemplateFile } from '../types';

export function getFreelanceQATemplates(): TemplateFile[] {
  return [
    {
      path: 'qa/test-strategy.md',
      content: `# Test Strategy

Align quality expectations with {{CLIENT_COMPANY}}.

## Scope
Which areas must be covered before launch?

## Approach
- Unit/integration/end-to-end coverage targets
- Manual UAT with the client
- Performance or security testing if applicable

## Sign-off
Who approves test results and how are issues tracked?
`
    },
    {
      path: 'qa/test-cases.md',
      content: `# Test Cases

Track high-value scenarios for client review.

| ID | Scenario | Steps | Expected | Owner |
| --- | --- | --- | --- | --- |
| TC-001 | | | | |
`
    }
  ];
}
