import { siteConfig } from '../config/siteConfig'
import { assets } from '../config/assets'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { StaggerChildren, StaggerItem } from '../components/motion/StaggerChildren'
import { SEO } from '../components/SEO'

const services = [
  { title: 'Love Reading', duration: '45 min', price: '₹ —', description: 'Explore the energy of your relationships, understand emotional patterns, and receive guidance on love and connection.', image: assets.services.tarot },
  { title: 'Career Reading', duration: '45 min', price: '₹ —', description: 'Navigate professional crossroads, uncover hidden opportunities, and align your career with your soul purpose.', image: assets.services.psychology },
  { title: 'Marriage Reading', duration: '60 min', price: '₹ —', description: 'Deep insight into marital dynamics, compatibility, and the path toward a harmonious partnership.', image: assets.services.healing },
  { title: 'Twin Flame Reading', duration: '60 min', price: '₹ —', description: 'Understand your twin flame connection, heal separation wounds, and navigate this profound spiritual bond.', image: assets.services.moonology },
  { title: 'Year Ahead Reading', duration: '90 min', price: '₹ —', description: 'A comprehensive forecast covering love, career, health, and spiritual growth for the coming year.', image: assets.highlights.tarotInsights },
  { title: 'Healing Session', duration: '60 min', price: '₹ —', description: 'Gentle energy healing and chakra balancing to restore harmony to mind, body, and spirit.', image: assets.services.healing },
  { title: 'Manifestation Coaching', duration: '60 min', price: '₹ —', description: 'Crystal-guided rituals and intention-setting to transform your dreams into tangible reality.', image: assets.services.manifestation },
  { title: 'Moonology Session', duration: '45 min', price: '₹ —', description: 'Align with lunar cycles, set powerful intentions, and navigate emotional tides with lunar wisdom.', image: assets.services.moonology },
]

export function Services() {
  const waUrl = buildWhatsAppUrl(siteConfig.whatsapp.phone, 'Hi, I would like to book a reading.')

  return (
    <>
      <SEO path="/services" title="Services | Soul Wave India"
        description="Explore tarot readings, healing sessions, moonology, manifestation coaching, and psychology-guided guidance."
      />
      <Section className="pt-28 md:pt-32">
        <Container>
          <SectionHeading
            accent="What We Offer"
            title="Our Services"
            subtitle="Luxury wellness sessions designed to bring clarity, healing, and empowerment to every area of your life."
          />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl text-charcoal mb-2">{service.title}</h3>
                    <div className="flex gap-4 text-sm text-warm-gray mb-3">
                      <span>{service.duration}</span>
                      <span className="text-gold font-medium">{service.price}</span>
                    </div>
                    <p className="text-warm-gray text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                    <Button href={waUrl} variant="primary" size="md" external>
                      Book Now
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </>
  )
}
