import type { ReactNode } from 'react'

type MainContentProps = {
  children: ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex min-h-screen min-w-0 flex-1 items-start justify-center px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      {children}
    </main>
  )
}
