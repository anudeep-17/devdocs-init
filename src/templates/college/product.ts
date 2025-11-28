import { TemplateFile } from '../types';

export function getCollegeProductTemplates(): TemplateFile[] {
  return [
    {
      path: 'product/vision.md',
      content: `# Project Overview — {{PROJECT_NAME}}

Provide the academic context for this project.

## Course Information
- Course: {{COURSE_NAME}} ({{COURSE_CODE}})
- Instructor: {{INSTRUCTOR_NAME}}
- Term: <e.g., Fall 2024>

## Team
List team members and roles: {{TEAM_MEMBERS}}

## Problem Statement
Summarize the assignment prompt or research question.

## Objectives
- Primary goal of the project
- Secondary goals or stretch objectives

## Deliverables
What artifacts are required (code, report, presentation)?
`
    },
    {
      path: 'product/roadmap.md',
      content: `# Timeline & Milestones

Describe planned checkpoints and due dates.

## Key Dates
- Proposal submitted: <date>
- Midterm demo: <date>
- Final submission: <date>

## Milestones
- Milestone name — expected deliverable

## Risks & Mitigations
List academic or technical risks and how you plan to mitigate them.
`
    },
    {
      path: 'product/stakeholders.md',
      content: `# Stakeholders & Audience

Identify who will review the project and who benefits from it.

- Instructor / Teaching Assistants
- Peers or end users
- Research participants (if any)

Include any ethical considerations or approvals required.
`
    }
  ];
}
