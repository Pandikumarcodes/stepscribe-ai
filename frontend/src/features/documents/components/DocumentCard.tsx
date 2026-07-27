import type { DocumentStatus } from '../mockDocuments'

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
  const statusClassName =
    status === 'Published'
      ? 'bg-emerald-50 text-emerald-700'
      : 'bg-amber-50 text-amber-700'

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm">
        <span
          className={`rounded-full px-2.5 py-1 font-medium ${statusClassName}`}
        >
          {status}
        </span>
        <p className="text-slate-500">{updatedText}</p>
      </div>
    </article>
  )
}
