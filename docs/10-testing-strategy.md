# Testing Strategy

## Unit tests

- Slug generation
- Zod schemas
- Authentication helpers
- Save-state logic
- Editor JSON validation
- Version-number calculation
- AI prompt builder

## Component tests

- Login form
- Registration form
- Document card
- Create-document dialog
- Rename dialog
- Delete confirmation
- Editor toolbar
- Save status
- AI result preview
- Publish dialog

## API tests

- Register
- Login
- Unauthorized access
- Ownership checks
- List documents
- Create document
- Update content
- Delete document
- Publish
- Public draft blocking
- Version restore
- Upload validation
- AI validation

## End-to-end flow

Register → Login → Create document → Open editor → Write text → Insert SOP step → Autosave → Refresh → Publish → Open public URL → Create version → Restore version
