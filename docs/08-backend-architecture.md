# Backend Architecture

## Folder structure

```text
backend/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── src/
│   ├── config/
│   ├── middleware/
│   ├── features/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── documents/
│   │   ├── versions/
│   │   ├── publishing/
│   │   ├── uploads/
│   │   └── ai/
│   ├── lib/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
└── tests/
```

## Feature structure

```text
documents/
├── document.routes.ts
├── document.controller.ts
├── document.service.ts
├── document.repository.ts
├── document.schema.ts
├── document.types.ts
└── document.errors.ts
```

## Request flow

Route → validation → controller → service → repository → Prisma → response

## Rules

- Controllers remain thin.
- Services contain business rules.
- Repositories contain database queries.
- Zod validates all external input.
- Raw Prisma errors are never exposed.
- Ownership is checked for every private document operation.
