import { type ReactNode } from 'react'
import { siteConfig } from '../../config/siteConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '../motion/StaggerChildren'

function TarotIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="1.25" />
      <path d="M28 12 L36 28 L28 44 L20 28 Z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function HealingIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path
        d="M28 10 L40.4 17.2 V31.6 L28 38.8 L15.6 31.6 V17.2 Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="28" cy="24" r="5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M28 29 V36" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function MoonologyIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M32 14.5 C24 16 18.5 23 18.5 30.5 C18.5 38 24 45 32 46.5 C26 46 20 40.5 20 32.5 C20 24.5 26 19 32 14.5 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="18" r="1.5" fill="currentColor" />
    </svg>
  )
}

function ManifestationIcon() {
  return (
    <svg width="88" height="88" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path
        d="M28 8 L30.5 22.5 L44 20 L32.5 28 L44 36 L30.5 33.5 L28 48 L25.5 33.5 L12 36 L23.5 28 L12 20 L25.5 22.5 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

const services: {
  title: string
  description: string
  icon: ReactNode
}[] = [
  {
    title: 'Tarot Reading',
    description:
      'Gain clarity on life transitions, relationships, and the path ahead through intuitive card guidance.',
    icon: <TarotIcon />,
  },
  {
    title: 'Healing',
    description:
      'Restore balance to mind, body, and spirit with gentle energy healing and chakra alignment.',
    icon: <HealingIcon />,
  },
  {
    title: 'Moonology',
    description:
      'Align with lunar cycles to manifest intentions and navigate emotional tides with grace.',
    icon: <MoonologyIcon />,
  },
  {
    title: 'Manifestation',
    description:
      'Transform intentions into reality with crystal-guided rituals and focused energy work.',
    icon: <ManifestationIcon />,
  },
]

export function ServicesPreviewSection() {
  const waUrl = buildWhatsAppUrl(siteConfig.whatsapp.phone, 'Hi, I would like to book a session.')

  return (
    <Section id="services-preview" ariaLabelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          accent="Our Offerings"
          title="Services Crafted for Your Journey"
          subtitle="Each session is personalized to meet you where you are — with compassion, clarity, and care."
          className="!mb-16 md:!mb-20"
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-10 sm:gap-y-16 lg:gap-x-12 lg:gap-y-0">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center text-center px-6 sm:px-4 transition-transform duration-300 ease-out hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold rounded-sm"
                aria-label={`Book ${service.title}`}
              >
                <span className="text-mauve/80 transition-all duration-300 ease-out group-hover:text-mauve group-hover:scale-105">
                  {service.icon}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-charcoal mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed mb-7 md:mb-8 max-w-[280px]">
                  {service.description}
                </p>
                <span
                  className="mt-auto text-charcoal text-xl transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-mauve"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
