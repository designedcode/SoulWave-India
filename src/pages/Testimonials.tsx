import { Star, Play } from 'lucide-react'
import { assets } from '../config/assets'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { FadeIn } from '../components/motion/FadeIn'
import { InstagramHighlightsSection } from '../components/home/InstagramHighlightsSection'
import { SEO } from '../components/SEO'

const testimonials = [
  {
    name: 'Ananya R.', location: 'Mumbai, India', rating: 5,
    text: 'The reading gave me clarity on a difficult career decision. I felt truly heard and left with a sense of direction I had been searching for months.',
    image: assets.testimonials.client01, type: 'review',
  },
  {
    name: 'Sarah M.', location: 'London, UK', rating: 5,
    text: 'Incredibly accurate and compassionate. The blend of psychology and tarot made everything feel grounded, not overwhelming.',
    image: assets.testimonials.client02, type: 'review',
  },
  {
    name: 'Priya K.', location: 'Delhi, India', rating: 5,
    text: 'My twin flame reading was transformative. She helped me understand the connection on a soul level and gave me tools to heal.',
    image: assets.testimonials.client01, type: 'review',
  },
  {
    name: 'WhatsApp Client', location: 'Verified message', rating: 5,
    text: 'Thank you for the healing session — I slept peacefully for the first time in weeks. Grateful for your gentle guidance and energy work.',
    image: null, type: 'whatsapp',
  },
  {
    name: 'Instagram Follower', location: 'Verified DM', rating: 5,
    text: 'Your moonology reading was spot on! Everything you said about this lunar cycle came true. Already booked my next session.',
    image: null, type: 'instagram',
  },
  {
    name: 'Video Testimonial', location: 'Coming soon', rating: 5,
    text: 'Watch client stories sharing their journey to clarity and healing with Soul Wave India.',
    image: null, type: 'video',
  },
]

export function Testimonials() {
  return (
    <>
      <SEO path="/testimonials" title="Testimonials | Soul Wave India"
        description="Read authentic client reviews and stories from Soul Wave India tarot and wellness sessions."
      />
      <Section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <Container>
          <SectionHeading
            accent="Client Stories"
            title="Testimonials"
            subtitle="Honest reflections from people who trusted Soul Wave India with their most personal questions."
          />
          <InstagramHighlightsSection />
          <FadeIn>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {testimonials.map((t) => (
                  <Card key={t.name + t.location} className="break-inside-avoid">
                    <div className="p-6">
                      {t.type === 'video' ? (
                        <div className="flex items-center justify-center h-32 bg-lavender/20 rounded-xl mb-4">
                          <Play size={32} className="text-mauve" aria-hidden="true" />
                          <span className="sr-only">Video testimonial placeholder</span>
                        </div>
                      ) : t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          width={48}
                          height={48}
                          loading="lazy"
                          className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-gold/30"
                        />
                      ) : (
                        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xs font-bold ${
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
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
