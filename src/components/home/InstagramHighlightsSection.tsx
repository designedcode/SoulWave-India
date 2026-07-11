import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { FadeIn } from '../motion/FadeIn'

const highlights = [
  { title: 'Tarot', image: assets.highlights.tarotInsights },
  { title: 'Healing', image: assets.services.healing },
  { title: 'Moonology', image: assets.highlights.moonology },
  { title: 'Testimonials', image: assets.testimonials.client01 },
  { title: 'Manifestation', image: assets.highlights.manifestation },
  { title: 'Learn', image: assets.highlights.spiritualPractices },
  { title: 'Psychology', image: assets.services.psychology },
  { title: 'Crystals', image: assets.highlights.crystalMagic },
]

export function InstagramHighlightsSection() {
  return (
    <Section ariaLabelledby="instagram-heading">
      <Container>
        <SectionHeading
          id="instagram-heading"
          accent="Follow Along"
          title="Instagram Highlights"
          subtitle="Daily inspiration, moon rituals, tarot tips, and client stories — join our community."
        />
        <FadeIn>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {highlights.map((item) => (
              <a
                key={item.title}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-w-[140px] sm:min-w-[160px] snap-center shrink-0 rounded-[var(--radius-card)] overflow-hidden shadow-md hover:shadow-[0_8px_30px_rgba(214,181,122,0.3)] transition-shadow"
              >
                <img
                  src={item.image}
                  alt={`${item.title} highlight`}
                  width={160}
                  height={200}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end p-3">
                  <span className="font-heading text-sm text-white">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
