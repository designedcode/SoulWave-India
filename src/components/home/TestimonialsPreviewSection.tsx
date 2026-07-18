import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../config/assets'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Modal } from '../ui/Modal'
import { FadeIn } from '../motion/FadeIn'

const testimonials = [
  {
    src: assets.testimonials.whatsapp01,
    alt: 'Client WhatsApp testimonial 1',
    width: 900,
    height: 1600,
  },
  {
    src: assets.testimonials.whatsapp02,
    alt: 'Client WhatsApp testimonial 2',
    width: 720,
    height: 1600,
  },
  {
    src: assets.testimonials.whatsapp03,
    alt: 'Client WhatsApp testimonial 3',
    width: 720,
    height: 1600,
  },
  {
    src: assets.testimonials.whatsapp04,
    alt: 'Client WhatsApp testimonial 4',
    width: 720,
    height: 1600,
  },
]

export function TestimonialsPreviewSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? testimonials[activeIndex] : null

  return (
    <Section ariaLabelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          accent="Kind Words"
          title="What Clients Say"
          subtitle="Real stories from people who found clarity, comfort, and confidence through Soul Wave India."
        />
        <FadeIn>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {testimonials.map((t, index) => (
              <Card key={t.src} className="aspect-square w-full min-w-0" hover={false}>
                <button
                  type="button"
                  className="block h-full w-full cursor-pointer transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label={`View ${t.alt}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    width={t.width}
                    height={t.height}
                    loading="lazy"
                    className="block h-full w-full object-cover"
                  />
                </button>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-flex items-center min-h-12 px-6 font-body text-sm font-medium text-gold hover:text-mauve transition-colors"
            >
              Read More Testimonials →
            </Link>
          </div>
        </FadeIn>
      </Container>

      <Modal
        open={active !== null}
        onClose={() => setActiveIndex(null)}
        title="Client Testimonial"
      >
        {active ? (
          <img
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            className="mx-auto block h-auto w-full max-w-md"
          />
        ) : null}
      </Modal>
    </Section>
  )
}
