import { SearchInput } from './SearchInput'
import { SortDropdown } from './SortDropdown'
import { StatusFilter } from './StatusFilter'

export function DocumentsControls() {
  return (
    <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <SearchInput />
      </div>
      <StatusFilter />
      <SortDropdown />
    </div>
  )
}
