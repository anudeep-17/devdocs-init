import { TemplateFile } from '../types';

export function getPersonalProductTemplates(): TemplateFile[] {
  return [
    {
      path: 'product/vision.md',
      content: `# Product Vision — {{PROJECT_NAME}}

A friendly reminder of why this project exists and who it helps.

## Purpose
- What problem am I solving for myself or others?
- Why does it matter?

## Elevator Pitch
Describe {{PROJECT_NAME}} in 1-2 sentences for a technical and non-technical reader.

## Tech Stack Snapshot
List the main tools and frameworks (e.g., {{TECH_STACK}}).

## Personal Learning Goals
- What do I want to learn from building this?
- What would "success" feel like?

## What This Is Not
Call out anything intentionally out of scope.
`
    },
    {
      path: 'product/roadmap.md',
      content: `# Roadmap — {{PROJECT_NAME}}

Keep a lightweight backlog of ideas and upcoming work.

## Now
- Current focus items

## Next
- Near-term enhancements

## Later / Nice-to-Have
- Future ideas or experiments

## Inspiration
Links, screenshots, or notes that inspire future work.
`
    },
    {
      path: 'product/prd-core-feature.md',
      content: `# Core Feature Brief

Document the main feature or story you want to deliver next.

## Problem Statement
What user pain point does this feature address?

## Desired Outcome
How will you measure if this feature worked?

## User Story
As a <type of user>, I want <goal> so that <benefit>.

## Acceptance Criteria
- [ ] Clear, testable outcomes
- [ ] Edge cases noted

## Notes
Add sketches, references, or links to issues.
`
    }
  ];
}
