import type { ReactNode } from 'react'

type MainContentProps = {
  children: ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex min-h-screen min-w-0 flex-1 items-center justify-center px-6 py-16">
      {children}
    </main>
  )
}
