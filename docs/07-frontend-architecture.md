# Frontend Architecture

## Folder structure

```text
frontend/src/
├── app/
│   ├── router.tsx
│   └── providers.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── feedback/
│   └── common/
├── features/
│   ├── auth/
│   ├── documents/
│   ├── editor/
│   ├── ai/
│   ├── publishing/
│   ├── versions/
│   ├── uploads/
│   └── settings/
├── hooks/
├── lib/
├── routes/
├── stores/
├── styles/
├── types/
└── main.tsx
```

## Frontend-heavy engineering areas

- TipTap editor state
- ProseMirror schema
- Custom SOP-step NodeView
- JSON serialization
- Editor selection
- Undo and redo
- Autosave state machine
- Debouncing and race-condition prevention
- AI preview and replacement
- Image uploads
- Responsive editor layout
- Keyboard accessibility

## State strategy

- TanStack Query: server state
- Local React state: component interactions
- Zustand: only shared client UI state when necessary
- TipTap: editor content state
