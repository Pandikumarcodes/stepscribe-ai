import type { DocumentStatus } from '../mockDocuments'

type DocumentStatusBadgeProps = {
  status: DocumentStatus
}

export function DocumentStatusBadge({ status }: DocumentStatusBadgeProps) {
  const statusClassName =
    status === 'Published'
      ? 'bg-emerald-50 text-emerald-700'
      : 'bg-amber-50 text-amber-700'

  return (
    <span className={`rounded-full px-2.5 py-1 font-medium ${statusClassName}`}>
      {status}
    </span>
  )
}
