# New Chat Handoff Prompt

Paste the following into a new ChatGPT chat:

```text
I am building a project named StepScribe AI.

It is a frontend-heavy full-stack application for creating SOPs, help articles, and step-by-step guides with AI assistance.

Technology:
- React, TypeScript, Vite
- React Router, Tailwind CSS, shadcn/ui
- TipTap
- TanStack Query, React Hook Form, Zod, Zustand
- Node.js, Express.js, TypeScript
- PostgreSQL and Prisma
- Cloudinary
- OpenAI API
- Vitest, React Testing Library, Supertest, Playwright

Important development rule:
We must build only one small function or component at a time. Never build an entire module in one prompt. For each task: plan, implement, review, test, verify, commit, and then continue.

I have a project documentation folder containing:
- product requirements
- feature scope
- technology stack
- UI design
- API contract
- database design
- frontend and backend architecture
- security, performance, and accessibility
- testing strategy
- development phases
- Codex workflow

Please continue from the current repository state. First ask me to paste the latest git status, folder tree, and last completed task. Then give only the next small Codex prompt.
```
