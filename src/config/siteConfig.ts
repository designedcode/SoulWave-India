export const siteConfig = {
  brand: 'Soul Wave India',
  tagline: 'Luxury Wellness',
  url: 'https://soulwaveindia.com',
  whatsapp: {
    phone: '919310412207',
    display: '+91-9310412207',
    defaultMessage: 'Hi Soul Wave India, I would like to book a reading.',
  },
  social: {
    instagram: 'https://instagram.com/placeholder',
    facebook: 'https://facebook.com/placeholder',
  },
  booking: {
    calendly: 'https://calendly.com/placeholder',
  },
  contact: {
    email: 'hello@soulwaveindia.com',
    hours: 'Mon – Sat: 10:00 AM – 8:00 PM IST',
    mapsEmbed: '',
  },
  stats: {
    clients: 300,
    rating: 5,
  },
  reader: {
    name: 'Mehar Kaur',
    title: 'Tarot Reader, Psychologist & Holistic Wellness Guide',
  },
} as const

export type SiteConfig = typeof siteConfig
