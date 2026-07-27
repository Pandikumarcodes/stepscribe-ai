export function DocumentsHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Documents
        </h1>
        <p className="mt-2 text-base leading-7 text-slate-600">
          Create and manage your SOPs, help articles, and step-by-step guides.
        </p>
      </div>
      <button
        type="button"
        disabled
        className="inline-flex min-h-10 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 sm:shrink-0"
      >
        Create document
      </button>
    </header>
  )
}
