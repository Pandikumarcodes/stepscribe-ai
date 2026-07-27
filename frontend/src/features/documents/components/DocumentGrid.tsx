import type { MockDocument } from '../mockDocuments'
import { DocumentCard } from './DocumentCard'

type DocumentGridProps = {
  documents: readonly MockDocument[]
}

export function DocumentGrid({ documents }: DocumentGridProps) {
  return (
    <ul
      aria-label="Documents"
      className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {documents.map((document) => (
        <li key={document.id}>
          <DocumentCard
            title={document.title}
            status={document.status}
            updatedText={document.updatedText}
          />
        </li>
      ))}
    </ul>
  )
}
