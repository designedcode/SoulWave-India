export const assets = {
  hero: {
    portrait: '/images/hero/hero-portrait.jpg',
  },
  services: {
    tarot: '/images/services/tarot.jpg',
    healing: '/images/services/healing.jpg',
    moonology: '/images/services/moonology.png',
    manifestation: '/images/services/manifestation.png',
    psychology: '/images/services/psychology.jpg',
  },
  testimonials: {
    client01: '/images/testimonials/client-01.jpg',
    client02: '/images/testimonials/client-02.jpg',
  },
  about: {
    portrait: '/images/about/reader-portrait.jpg',
  },
  decorative: {
    ctaBackground: '/images/decorative/cta-background.jpg',
    icon01: '/images/decorative/icon-01.png',
    icon02: '/images/decorative/icon-02.png',
    ladyLuna: '/images/decorative/lady-luna.png',
  },
  highlights: {
    crystalMagic: '/images/highlights/crystal-magic.jpg',
    tarotInsights: '/images/highlights/tarot-insights.jpg',
    spiritualPractices: '/images/highlights/spiritual-practices.jpg',
    moonology: '/images/highlights/moonology.jpg',
    manifestation: '/images/highlights/manifestation.jpg',
  },
} as const

export type Assets = typeof assets
