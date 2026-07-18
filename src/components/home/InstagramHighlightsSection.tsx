import { ExternalLink } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
import { FadeIn } from '../motion/FadeIn'
import { InstagramIcon } from '../ui/InstagramIcon'

const highlights = [
  { title: 'Spellwork', image: assets.highlights.spiritualPractices },
  { title: 'Shop', image: assets.highlights.crystalMagic },
  { title: 'Love Letter', image: assets.highlights.manifestation },
  { title: 'Akashic', image: assets.highlights.tarotInsights },
  { title: 'Love Bundle', image: assets.services.healing },
  { title: 'Reviews', image: assets.testimonials.client01 },
  { title: 'Pranic', image: assets.services.psychology },
  { title: 'Lama Fera', image: assets.highlights.moonology },
]

const instagramPosts = [
  {
    title: 'Hidden emotions tarot reading',
    url: 'https://www.instagram.com/reel/Da5OTVDCk5l/embed/',
  },
  {
    title: 'Pick a card intuitive reading',
    url: 'https://www.instagram.com/reel/Da499Iwiin5/embed/',
  },
  {
    title: 'Complimentary tarot reading',
    url: 'https://www.instagram.com/reel/Da0EeTvHX1K/embed/',
  },
]

export function InstagramHighlightsSection() {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <div className="overflow-hidden rounded-[2rem] border border-lavender/40 bg-white/70 shadow-[0_24px_70px_rgba(67,52,72,0.08)] backdrop-blur-sm">
        <div className="flex flex-col gap-5 border-b border-lavender/30 px-5 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gradient-to-tr from-gold via-mauve to-lavender p-[3px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-1.5">
                <img
                  src={assets.hero.logo}
                  alt="Soul Wave India"
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-lg text-charcoal transition-colors hover:text-mauve"
              >
                @tarotsoulwaveindia
              </a>
              <p className="mt-0.5 text-sm text-warm-gray">
                Tarot • Astrology • Spells • Healing
              </p>
              <p className="mt-1 text-xs font-medium text-charcoal/70">7.5K+ followers</p>
            </div>
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-mauve"
          >
            <InstagramIcon size={17} />
            Follow
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <div
          className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 py-6 md:gap-7 md:px-8"
          aria-label="Instagram story highlights"
        >
          {highlights.map((item) => (
            <a
              key={item.title}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[74px] shrink-0 snap-start text-center sm:w-[82px]"
            >
              <span className="block rounded-full bg-gradient-to-tr from-gold via-mauve to-lavender p-[2px] transition-transform duration-300 group-hover:scale-105">
                <span className="block rounded-full bg-white p-[3px]">
                  <img
                    src={item.image}
                    alt=""
                    width={82}
                    height={82}
                    loading="lazy"
                    className="aspect-square w-full rounded-full object-cover"
                  />
                </span>
              </span>
              <span className="mt-2 block truncate text-xs font-medium text-charcoal">
                {item.title}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-lavender/30 bg-cream/30 px-4 py-7 sm:px-6 md:px-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve">
                From Instagram
              </p>
              <h3 className="mt-1 font-heading text-2xl text-charcoal">Latest guidance</h3>
            </div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-sm font-semibold text-mauve transition-colors hover:text-charcoal sm:inline-flex"
            >
              View profile
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {instagramPosts.map((post) => (
              <div
                key={post.url}
                className="mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <iframe
                  src={post.url}
                  title={`Instagram post: ${post.title}`}
                  width="100%"
                  height="620"
                  loading="lazy"
                  scrolling="no"
                  className="block w-full border-0"
                  allow="encrypted-media"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
