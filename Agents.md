Project: StepScribe AI

Goal:
Build a frontend-heavy full-stack application for creating SOPs,
help articles, and step-by-step guides with AI assistance.

Architecture:

- React.js with TypeScript and Vite frontend
- Node.js, Express.js and TypeScript backend
- PostgreSQL with Prisma ORM
- Feature-based folder structure

Development method:

- Build one small function or component at a time.
- Never build an entire module in one prompt.
- Complete, test, verify, and commit each task before continuing.
- Do not implement optional features unless explicitly requested.
- Do not refactor unrelated files.

Code quality:

- Use strict TypeScript.
- Do not use any.
- Validate external input with Zod.
- Keep database code outside React components.
- Keep secrets and API keys in backend environment variables.
- Include loading, empty, success, and error states.
- Use accessible semantic HTML.
- Run lint, type checking, tests, and builds after each task.

MVP features:

- Authentication
- Document dashboard
- Document CRUD
- TipTap editor
- Autosave
- Structured SOP steps
- Screenshot upload
- Publishing
- Version history
- AI text rewriting

Out of scope:

- Teams
- Organizations
- Billing
- Real-time collaboration
- Comments
- Video editing
- Chrome extension
- Advanced analytics
