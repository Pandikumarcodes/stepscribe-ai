import { Link } from 'react-router-dom'

type SidebarNavigationItemProps = {
  label: string
  active?: boolean
  comingSoon?: boolean
  to?: string
}

export function SidebarNavigationItem({
  label,
  active = false,
  comingSoon = false,
  to,
}: SidebarNavigationItemProps) {
  const className = [
    'flex min-h-10 items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium',
    active
      ? 'bg-indigo-50 text-indigo-700'
      : comingSoon
        ? 'text-slate-400'
        : 'text-slate-700 hover:bg-slate-100',
  ].join(' ')

  return (
    <li>
      {to && !comingSoon ? (
        <Link
          to={to}
          aria-current={active ? 'page' : undefined}
          className={`${className} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          <span>{label}</span>
        </Link>
      ) : (
        <div className={className}>
          <span>{label}</span>
          {comingSoon && (
            <span className="text-xs font-normal text-slate-400">
              Coming soon
            </span>
          )}
        </div>
      )}
    </li>
  )
}
