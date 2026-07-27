# UI Design

## Visual direction

- Clean B2B SaaS design
- Light gray application background
- White cards and editor canvas
- Indigo primary accent
- Slate text
- Subtle borders
- Minimal shadows
- Accessible focus states
- Responsive layouts

## Main routes

- `/login`
- `/register`
- `/documents`
- `/documents/:documentId/edit`
- `/documents/:documentId/preview`
- `/public/:slug`
- `/settings`

## Application shell

- Desktop sidebar
- Mobile navigation drawer
- Topbar
- Main content container
- User profile menu

## Dashboard components

- DocumentsHeader
- SearchInput
- StatusFilter
- SortDropdown
- NewDocumentButton
- DocumentGrid
- DocumentCard
- RenameDocumentDialog
- DeleteDocumentDialog
- EmptyState
- LoadingSkeleton
- ErrorState

## Editor layout

- EditorHeader
- BackButton
- EditableTitle
- SaveStatus
- PreviewButton
- HistoryButton
- PublishButton
- EditorToolbar
- DocumentCanvas
- RichTextEditor
- AISelectionMenu
- VersionHistoryDrawer
- Optional properties panel

## SOP step card

Each step displays:

- Step-number badge
- Editable title
- Editable description
- Screenshot area
- More-actions menu
- Delete action

## Public page

- Brand header
- Document title
- Updated date
- Optional table of contents
- Read-only document renderer
- SOP step renderer
- Footer

## Responsive behavior

Desktop:
- Full sidebar
- Centered editor
- Optional right panel

Tablet:
- Collapsible sidebar
- Drawer for secondary panels

Mobile:
- Navigation drawer
- Horizontally scrollable editor toolbar
- Full-width editor
- Stacked step cards
