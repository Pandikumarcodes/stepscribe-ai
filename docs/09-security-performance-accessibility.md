# Security, Performance, and Accessibility

## Security

- Hash passwords with bcrypt.
- Prefer HTTP-only cookies.
- Use secure cookies in production.
- Validate all input with Zod.
- Verify document ownership on every private operation.
- Apply CORS allowlisting.
- Use Helmet.
- Add rate limiting.
- Limit request body sizes.
- Validate file MIME type and size.
- Keep OpenAI keys on the backend.
- Do not log passwords, tokens, cookies, AI text, or full documents.

## Performance

- Lazy-load editor routes.
- Dynamically import TipTap where useful.
- Debounce document search.
- Debounce autosave around 800 milliseconds.
- Avoid saving unchanged content.
- Prevent stale autosave responses.
- Paginate document lists.
- Select only needed database fields.
- Add database indexes.
- Compress responses.
- Lazy-load images.

## Accessibility

Target WCAG 2.1 AA basics:

- Semantic HTML
- Labels for all fields
- Visible focus styles
- Keyboard-accessible toolbar
- Accessible dialogs
- Proper heading hierarchy
- Sufficient contrast
- Alt text for screenshots
- `aria-label` for icon buttons
- `aria-live` for save status and errors
- No keyboard traps
