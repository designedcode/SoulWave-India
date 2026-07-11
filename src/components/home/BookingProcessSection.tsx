import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, CheckCircle, MessageSquare, Sparkles } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  { icon: Sparkles, title: 'Choose Reading', description: 'Browse services and select the session that resonates with your needs.' },
  { icon: Calendar, title: 'Book', description: 'Schedule via Calendly or message us on WhatsApp at your convenience.' },
  { icon: CheckCircle, title: 'Receive Confirmation', description: 'Get a warm welcome message with session details and preparation tips.' },
  { icon: MessageSquare, title: 'Session Begins', description: 'Connect in a safe, confidential space for your personalized guidance.' },
]

export function BookingProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%'])

  return (
    <Section ariaLabelledby="booking-heading">
      <Container>
        <SectionHeading
          id="booking-heading"
          accent="Simple & Seamless"
          title="Your Booking Journey"
          subtitle="Four easy steps from curiosity to clarity."
        />
        <div ref={ref} className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-blush/40" aria-hidden="true">
            <motion.div className="w-full bg-gold origin-top" style={{ height: lineHeight }} />
          </div>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-6 pl-16 md:pl-20"
              >
                <div className="absolute left-0 md:left-2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gold shadow-md">
                  <step.icon size={22} className="text-gold" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-medium text-mauve uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-heading text-xl text-charcoal mt-1 mb-2">{step.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
