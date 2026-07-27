import { SidebarNavigationItem } from './SidebarNavigationItem'

export function SidebarNavigation() {
  return (
    <nav aria-label="Primary navigation" className="px-3 py-5">
      <ul className="space-y-1">
        <SidebarNavigationItem label="Documents" to="/" active />
        <SidebarNavigationItem label="Templates" comingSoon />
        <SidebarNavigationItem label="Shared" comingSoon />
        <SidebarNavigationItem label="Settings" comingSoon />
      </ul>
    </nav>
  )
}
