import { type ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  ariaLabelledby?: string
}

export function Section({ children, className = '', id, ariaLabelledby }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-[var(--spacing-section)] ${className}`}
    >
      {children}
    </section>
  )
}
