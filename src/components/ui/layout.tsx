import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="flex mx-16 flex-col">{children}</main>
}
