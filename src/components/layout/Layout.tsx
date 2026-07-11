import { type ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingCTA } from './FloatingCTA'
import { ScrollProgress } from './ScrollProgress'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
