# devdocs-init

`devdocs-init` is a friendly Node.js CLI that scaffolds a professional `/docs` folder for your existing project. It asks a few questions and then generates documentation templates tailored to personal, college, or freelance/client projects.

## Installation

Use it instantly via `npx`:

```bash
npx devdocs-init
```

Or install as a dev dependency:

```bash
npm install -D devdocs-init
npx devdocs-init
```

## What it does

- Prompts for your project name, project type, and which documentation sections to include.
- Creates a `/docs` folder (without touching your application code).
- Generates Markdown templates with helpful prompts and placeholders like `{{PROJECT_NAME}}`, `{{CLIENT_NAME}}`, and more depending on the project type.
- Backs up existing files with a `.bak` suffix if they already exist.

## Example flow

```text
🔧 DevDocs Init – Project Documentation Scaffolder
? Project name › my-next-app
? Project type › Personal / Portfolio
? Include Product docs? › yes
? Include Requirements docs? › yes
? Include Architecture docs? › yes
... (more toggles)
```

## Example generated tree

```
docs/
  index.md
  product/
    vision.md
    roadmap.md
  requirements/
    user-stories.md
  architecture/
    overview.md
    data-model.md
    api-design.md
    diagrams/
      README.md
  adr/
    ADR-001-example.md
  qa/
    test-strategy.md
  ops/
    ci-cd.md
  process/
    ways-of-working.md
    definition-of-done.md
```

The exact files depend on the project type and the sections you enable.

## Customizing the docs

The generated Markdown is intentionally concise with clear headings and fill-in-the-blank prompts. Open `/docs/index.md` and follow the links to start editing. Replace placeholders (e.g., `{{PROJECT_NAME}}`, `{{CLIENT_NAME}}`, `{{COURSE_CODE}}`) with real values for your project.

## Scripts

- `npm run build` — compile TypeScript to `dist/`
- `npm run start` — run the compiled CLI locally (`node dist/index.js`)
- `npm run prepare` — automatically builds on install/publish

Happy documenting! 🎉
