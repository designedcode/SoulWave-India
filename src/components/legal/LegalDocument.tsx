import type { ReactNode } from 'react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { FadeIn } from '../motion/FadeIn'

type LegalDocumentProps = {
  accent: string
  title: string
  children: ReactNode
}

export function LegalDocument({
  accent,
  title,
  children,
}: LegalDocumentProps) {
  return (
    <Section className="pt-28 md:pt-32 pb-16 md:pb-24">
      <Container>
        <FadeIn>
          <header className="max-w-3xl mx-auto mb-10 md:mb-14 text-center">
            <p className="font-accent text-3xl md:text-4xl text-mauve mb-2">{accent}</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              {title}
            </h1>
            <div
              className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              aria-hidden="true"
            />
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="legal-prose max-w-3xl mx-auto space-y-8 text-warm-gray leading-relaxed">
            {children}
          </article>
        </FadeIn>
      </Container>
    </Section>
  )
}

type LegalSectionProps = {
  id?: string
  title: string
  children: ReactNode
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-3">
      <h2 className="font-heading text-2xl text-charcoal">{title}</h2>
      <div className="space-y-3 text-sm md:text-base">{children}</div>
    </section>
  )
}
