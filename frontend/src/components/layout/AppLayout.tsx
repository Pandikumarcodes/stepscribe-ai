import type { ReactNode } from 'react'
import { MainContent } from './MainContent'
import { Sidebar } from './Sidebar'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-slate-50">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  )
}
