export function SearchInput() {
  return (
    <div className="w-full">
      <label htmlFor="document-search" className="sr-only">
        Search documents
      </label>
      <input
        id="document-search"
        type="search"
        placeholder="Search documents"
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:max-w-md"
      />
    </div>
  )
}
