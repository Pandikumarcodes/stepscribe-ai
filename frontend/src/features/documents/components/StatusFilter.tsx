export function StatusFilter() {
  return (
    <div className="w-full sm:w-44 sm:shrink-0">
      <label htmlFor="document-status" className="sr-only">
        Filter documents by status
      </label>
      <select
        id="document-status"
        defaultValue="all"
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      >
        <option value="all">All statuses</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
    </div>
  )
}
