import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Accordion } from '../ui/Accordion'
import { FadeIn } from '../motion/FadeIn'

const faqItems = [
  {
    question: 'How does Tarot work?',
    answer: 'Tarot is a reflective tool that uses symbolic imagery to illuminate patterns, possibilities, and inner wisdom. During your session, I interpret the cards intuitively while weaving in psychological insight — helping you gain clarity rather than fixed predictions.',
  },
  {
    question: 'Are readings confidential?',
    answer: 'Absolutely. Every session is completely private. What you share stays between us, creating a safe space where you can explore even the most sensitive questions without judgment.',
  },
  {
    question: 'Can I ask relationship questions?',
    answer: 'Yes — love and relationships are among the most common topics. Whether you are navigating a current partnership, healing from the past, or seeking your twin flame, I offer compassionate, honest guidance tailored to your situation.',
  },
  {
    question: 'How long are sessions?',
    answer: 'Standard readings are 45–60 minutes. Extended sessions (90 minutes) are available for in-depth explorations such as year-ahead forecasts or comprehensive life path readings.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, bank transfer, and international payments via PayPal. Payment details are shared upon booking confirmation via WhatsApp.',
  },
]

export function FAQSection() {
  return (
    <Section className="bg-rose-quartz/20" ariaLabelledby="faq-heading">
      <Container>
        <SectionHeading
          id="faq-heading"
          accent="Questions"
          title="Frequently Asked"
          subtitle="Everything you need to know before your first session."
        />
        <FadeIn className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </FadeIn>
      </Container>
    </Section>
  )
}
