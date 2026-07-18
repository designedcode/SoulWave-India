export const assets = {
  hero: {
    portrait: '/images/hero/hero-section.png',
    background: '/images/hero/aesthetic-sky-background-with-moon-clouds-pink-scaled.jpg',
    logo: '/images/hero/Logo.png',
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
    whatsapp01: '/images/testimonials/whatsapp-testimonial.jpeg',
    whatsapp02: '/images/testimonials/whatsapp-testimonial-02.jpeg',
    whatsapp03: '/images/testimonials/whatsapp-testimonial-03.jpeg',
    whatsapp04: '/images/testimonials/whatsapp-testimonial-04.jpeg',
  },
  about: {
    portrait: '/images/about/reader.png',
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
