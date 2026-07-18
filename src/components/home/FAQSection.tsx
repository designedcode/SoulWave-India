import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { moreFaqItems, topFaqItems } from '../../config/faqs'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Accordion } from '../ui/Accordion'
import { FadeIn } from '../motion/FadeIn'

interface FAQSectionProps {
  className?: string
  headingId?: string
}

export function FAQSection({
  className = 'bg-rose-quartz/20',
  headingId = 'faq-heading',
}: FAQSectionProps) {
  const [showAll, setShowAll] = useState(false)

  return (
    <Section className={className} ariaLabelledby={headingId}>
      <Container>
        <SectionHeading
          id={headingId}
          accent="Questions"
          title="Frequently Asked"
          subtitle="Everything you need to know before your first session."
        />
        <FadeIn className="max-w-3xl mx-auto">
          <Accordion items={topFaqItems} />

          {moreFaqItems.length > 0 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group flex w-full items-center justify-between gap-4 rounded-[var(--radius-card)] border border-blush/30 bg-white/60 backdrop-blur-sm px-6 md:px-8 py-5 text-left min-h-12 transition-colors hover:bg-blush/20 hover:border-blush/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-expanded={showAll}
              >
                <span className="font-heading text-lg md:text-xl text-charcoal transition-colors group-hover:text-gold">
                  {showAll ? 'Show fewer questions' : 'View all questions'}
                </span>
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-gold transition-transform group-hover:scale-110"
                >
                  <ChevronDown size={22} aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {showAll && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4">
                      <Accordion items={moreFaqItems} defaultOpenIndex={null} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </FadeIn>
      </Container>
    </Section>
  )
}
