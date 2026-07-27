export function SortDropdown() {
  return (
    <div className="w-full sm:w-48 sm:shrink-0">
      <label htmlFor="document-sort" className="sr-only">
        Sort documents
      </label>
      <select
        id="document-sort"
        defaultValue="recently-updated"
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      >
        <option value="recently-updated">Recently updated</option>
        <option value="oldest-updated">Oldest updated</option>
        <option value="title-a-z">Title A–Z</option>
        <option value="title-z-a">Title Z–A</option>
      </select>
    </div>
  )
}
