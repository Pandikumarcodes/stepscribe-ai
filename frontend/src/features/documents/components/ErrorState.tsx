export function ErrorState() {
  return (
    <section
      role="alert"
      aria-labelledby="error-state-heading"
      className="rounded-lg border border-red-100 bg-white px-6 py-12 text-center shadow-sm"
    >
      <h2
        id="error-state-heading"
        className="text-xl font-semibold tracking-tight text-slate-900"
      >
        Unable to load documents
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
        Something went wrong while loading your documents. Please try again.
      </p>
      <button
        type="button"
        className="mt-6 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Try again
      </button>
    </section>
  )
}
