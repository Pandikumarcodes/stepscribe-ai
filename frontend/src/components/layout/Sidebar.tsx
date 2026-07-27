import { SidebarLogo } from './SidebarLogo'
import { SidebarNavigation } from './SidebarNavigation'

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <SidebarLogo />
      <SidebarNavigation />
    </aside>
  )
}
