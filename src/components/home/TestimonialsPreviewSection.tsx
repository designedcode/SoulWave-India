import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { assets } from '../../config/assets'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { FadeIn } from '../motion/FadeIn'

const testimonials = [
  {
    name: 'Ananya R.',
    location: 'Mumbai',
    rating: 5,
    text: 'The reading gave me clarity on a difficult career decision. I felt truly heard and left with a sense of direction I had been searching for.',
    image: assets.testimonials.client01,
    type: 'review' as const,
  },
  {
    name: 'Sarah M.',
    location: 'London',
    rating: 5,
    text: 'Incredibly accurate and compassionate. The blend of psychology and tarot made everything feel grounded, not overwhelming.',
    image: assets.testimonials.client02,
    type: 'review' as const,
  },
  {
    name: 'WhatsApp Review',
    location: 'Client message',
    rating: 5,
    text: '"Thank you for the healing session — I slept peacefully for the first time in weeks. Grateful for your gentle guidance."',
    image: null,
    type: 'whatsapp' as const,
  },
  {
    name: 'Instagram DM',
    location: 'Client message',
    rating: 5,
    text: '"Your moonology reading was spot on! Everything you said about this lunar cycle came true. Already booked my next session."',
    image: null,
    type: 'instagram' as const,
  },
]

export function TestimonialsPreviewSection() {
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
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="min-w-[280px] md:min-w-0 snap-center shrink-0 md:shrink">
                <div className="p-6">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={`${t.name} profile`}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-gold/30"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xs font-medium ${
                      t.type === 'whatsapp' ? 'bg-whatsapp/10 text-whatsapp' : 'bg-lavender/30 text-mauve'
                    }`}>
                      {t.type === 'whatsapp' ? 'WA' : 'IG'}
                    </div>
                  )}
                  <div className="flex gap-0.5 text-gold mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-heading text-charcoal">{t.name}</p>
                  <p className="text-xs text-warm-gray">{t.location}</p>
                </div>
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
    </Section>
  )
}
