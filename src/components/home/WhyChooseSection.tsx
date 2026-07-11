import { Heart, Lock, Sparkles, Brain, Shield, BookOpen } from 'lucide-react'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../motion/FadeIn'
import { StaggerChildren, StaggerItem } from '../motion/StaggerChildren'

const reasons = [
  { icon: Heart, title: 'Compassionate', description: 'Every session is held with warmth, empathy, and genuine care.' },
  { icon: Lock, title: 'Confidential', description: 'Your story stays private. Trust is the foundation of our work.' },
  { icon: Sparkles, title: 'Personalized', description: 'No generic readings — guidance tailored to your unique journey.' },
  { icon: Brain, title: 'Psychology + Spirituality', description: 'A thoughtful blend of intuitive wisdom and psychological insight.' },
  { icon: Shield, title: 'Non-judgmental', description: 'A safe space to explore questions without fear or shame.' },
  { icon: BookOpen, title: 'Evidence-informed', description: 'Grounded guidance that honors both science and soul.' },
]

export function WhyChooseSection() {
  return (
    <Section className="bg-gradient-to-b from-rose-quartz/30 to-ivory" ariaLabelledby="why-heading">
      <Container>
        <SectionHeading
          id="why-heading"
          accent="Why Soul Wave"
          title="Why Choose Soul Wave India"
          subtitle="A sanctuary where intuition meets integrity — designed to help you feel seen, supported, and empowered."
        />
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <FadeIn>
                <div className="text-center p-6 rounded-[var(--radius-card)] bg-white/50 border border-blush/20 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lavender/30 text-mauve mb-4">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-2">{title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
