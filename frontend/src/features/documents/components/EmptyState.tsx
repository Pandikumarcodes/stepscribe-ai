export function EmptyState() {
  return (
    <section
      aria-labelledby="empty-state-heading"
      className="rounded-lg border border-slate-200 bg-white px-6 py-12 text-center shadow-sm"
    >
      <h2
        id="empty-state-heading"
        className="text-xl font-semibold tracking-tight text-slate-900"
      >
        No documents yet
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
        Create your first document to start building SOPs and step-by-step
        guides.
      </p>
      <button
        type="button"
        disabled
        className="mt-6 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white opacity-50 disabled:cursor-not-allowed"
      >
        Create document
      </button>
    </section>
  )
}
