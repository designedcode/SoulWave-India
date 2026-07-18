import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
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
    <FadeIn>
      <div
        className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 mb-10 md:mb-14"
        aria-label="Instagram highlights"
      >
        {highlights.map((item) => (
          <a
            key={item.title}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-w-[70px] sm:min-w-[80px] snap-center shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-[0_8px_30px_rgba(214,181,122,0.3)] transition-shadow"
          >
            <img
              src={item.image}
              alt={`${item.title} highlight`}
              width={160}
              height={200}
              loading="lazy"
              className="w-full h-20 sm:h-24 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end p-2">
              <span className="font-heading text-[10px] leading-tight text-white">{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </FadeIn>
  )
}
