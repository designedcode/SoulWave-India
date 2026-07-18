import { siteConfig } from '../config/siteConfig'
import {
  services,
  buildServiceWhatsAppMessage,
} from '../config/services'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '../components/motion/StaggerChildren'
import { ServiceCard } from '../components/services/ServiceCard'
import { SEO } from '../components/SEO'

export function Services() {
  return (
    <>
      <SEO
        path="/services"
        title="Services | Soul Wave India"
        description="Explore tarot, akashic readings, astrology, healing, vastu, numerology, and more — with clear energy exchange details."
      />
      <Section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <Container>
          <SectionHeading
            accent="What We Offer"
            title="Our Services"
            subtitle="Each offering is personalised to meet you where you are. Tap a service for pricing details, modes, and what to share when you book."
          />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {services.map((service) => {
              const waUrl = buildWhatsAppUrl(
                siteConfig.whatsapp.phone,
                buildServiceWhatsAppMessage(service),
              )
              return (
                <StaggerItem key={service.id}>
                  <ServiceCard service={service} bookUrl={waUrl} />
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </Container>
      </Section>
    </>
  )
}
