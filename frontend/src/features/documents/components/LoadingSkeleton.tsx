export function LoadingSkeleton() {
  return (
    <section role="status" aria-live="polite" aria-label="Loading documents">
      <ul
        aria-hidden="true"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {Array.from({ length: 3 }, (_, index) => (
          <li
            key={`document-skeleton-${index}`}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="h-5 w-3/4 rounded bg-slate-100" />
            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="h-6 w-20 rounded-full bg-slate-100" />
              <div className="h-4 w-28 rounded bg-slate-100" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
