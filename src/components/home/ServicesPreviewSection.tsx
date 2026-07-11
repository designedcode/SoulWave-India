import { assets } from '../../config/assets'
import { siteConfig } from '../../config/siteConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { StaggerChildren, StaggerItem } from '../motion/StaggerChildren'

const services = [
  {
    title: 'Tarot Reading',
    description: 'Gain clarity on life transitions, relationships, and the path ahead through intuitive card guidance.',
    image: assets.services.tarot,
    alt: 'Tarot cards and candles on a serene table',
  },
  {
    title: 'Healing',
    description: 'Restore balance to mind, body, and spirit with gentle energy healing and chakra alignment.',
    image: assets.services.healing,
    alt: 'Chakra stones for energy healing',
  },
  {
    title: 'Moonology',
    description: 'Align with lunar cycles to manifest intentions and navigate emotional tides with grace.',
    image: assets.services.moonology,
    alt: 'Full moon illustration for moonology guidance',
  },
  {
    title: 'Manifestation',
    description: 'Transform intentions into reality with crystal-guided rituals and focused energy work.',
    image: assets.services.manifestation,
    alt: 'Rose quartz crystal for manifestation',
  },
  {
    title: 'Psychology Guidance',
    description: 'Evidence-informed support blending therapeutic insight with spiritual wisdom.',
    image: assets.services.psychology,
    alt: 'Thoughtful guidance session',
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
        />
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl text-charcoal mb-2">{service.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                  <Button href={waUrl} variant="ghost" size="md" external className="self-start text-gold hover:text-gold">
                    Book →
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  )
}
