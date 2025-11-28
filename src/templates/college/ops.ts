import { TemplateFile } from '../types';

export function getCollegeOpsTemplates(): TemplateFile[] {
  return [
    {
      path: 'ops/environments.md',
      content: `# Environments & Deployments

Describe how teammates and graders can run {{PROJECT_NAME}}.

## Local Setup
- Prerequisites
- Commands to start the app

## Demo / Presentation Environment
- URL or instructions to access
- Credentials (if allowed)

## CI/CD
If using automation, summarize build/test steps and links to pipelines.
`
    }
  ];
}
