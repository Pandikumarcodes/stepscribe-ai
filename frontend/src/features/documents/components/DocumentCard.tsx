import type { DocumentStatus } from '../mockDocuments'
import { DocumentStatusBadge } from './DocumentStatusBadge'

type DocumentCardProps = {
  title: string
  status: DocumentStatus
  updatedText: string
}

export function DocumentCard({
  title,
  status,
  updatedText,
}: DocumentCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <button
          type="button"
          aria-label={`Open actions for ${title}`}
          className="shrink-0 rounded-md px-2 py-1 text-lg leading-none text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          •••
        </button>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm">
        <DocumentStatusBadge status={status} />
        <p className="text-slate-500">{updatedText}</p>
      </div>
    </article>
  )
}
