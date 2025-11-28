import { TemplateFile } from '../types';

export function getPersonalArchitectureTemplates(): TemplateFile[] {
  return [
    {
      path: 'architecture/overview.md',
      content: `# Architecture Overview — {{PROJECT_NAME}}

Keep this short and practical. Describe how the pieces fit together.

## System Outline
- Frontend: tech, key folders
- Backend: tech, main responsibilities
- Data: storage choices and why

## Key Flows
List one or two core user flows and how requests travel through the system.

## Tech Choices
Why did you choose this stack? Note trade-offs and alternatives.
`
    },
    {
      path: 'architecture/data-model.md',
      content: `# Data Model

Sketch the main entities, even if informal.

## Entities
- Entity name — key fields
- Relationships or references

## Notes
- How do you persist data locally or remotely?
- Any caching layers?
`
    },
    {
      path: 'architecture/api-design.md',
      content: `# API Design

Document the endpoints you expose or consume.

## Endpoints
| Method | Path | Purpose | Auth |
| --- | --- | --- | --- |
| GET | /api/example | Brief description | Optional |

## Error Handling
How do you return errors? What should clients expect?

## Future Improvements
Ideas for versioning, pagination, or performance.
`
    },
    {
      path: 'architecture/diagrams/README.md',
      content: `# Diagrams

Add sequence, component, or deployment diagrams here (PNG/SVG). Include an updated image when architecture changes.
`
    }
  ];
}
