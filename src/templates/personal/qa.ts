import { TemplateFile } from '../types';

export function getPersonalQATemplates(): TemplateFile[] {
  return [
    {
      path: 'qa/test-strategy.md',
      content: `# Test Strategy

Explain how you keep {{PROJECT_NAME}} reliable.

- What types of tests exist? (unit, integration, e2e)
- How do you run them locally?
- Any manual checks before deploy?
`
    },
    {
      path: 'qa/test-cases.md',
      content: `# Test Cases

Track important scenarios to rerun.

| ID | Scenario | Steps | Expected |
| --- | --- | --- | --- |
| TC-001 | Example happy path | ... | ... |
`
    }
  ];
}
