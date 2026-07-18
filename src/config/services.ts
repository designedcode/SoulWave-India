import { assets } from './assets'

export type PriceTier = {
  label: string
  price: string
  note?: string
}

export type ServiceOffering = {
  id: string
  title: string
  description: string
  /** Shown on the collapsed card. Null means contact for pricing. */
  startingPrice: string | null
  priceTiers: PriceTier[]
  modes: string[]
  inclusions: string[]
  requirements: string[]
  notes?: string[]
  image: string
  category: 'readings' | 'analysis' | 'healing' | 'rituals' | 'other'
}

const CONTACT = 'Contact for pricing'

export const services: ServiceOffering[] = [
  {
    id: 'tarot-reading',
    title: 'Tarot Reading',
    description:
      'A reflective consultation using tarot as a symbolic framework to explore your current circumstances, illuminate patterns, gain perspective and support thoughtful decision-making. Rather than predicting a fixed future, tarot invites meaningful conversations with yourself and the possibilities that lie ahead.',
    startingPrice: '₹2,299',
    priceTiers: [
      { label: 'Minimum 3 questions', price: '₹2,299', note: 'Text / Audio Notes' },
      { label: 'Every additional question', price: '₹599' },
      { label: '20 minutes (unlimited questions)', price: '₹3,499', note: 'Voice Call' },
      { label: 'Every additional 10 minutes', price: '₹1,499', note: 'Voice Call' },
      { label: '20 minutes (unlimited questions)', price: '₹4,999', note: 'Video Call' },
      { label: 'Every additional 10 minutes', price: '₹1,999', note: 'Video Call' },
    ],
    modes: ['Text / Audio Notes', 'Voice Call', 'Video Call'],
    inclusions: [],
    requirements: [
      'Full Name or Initials of the persons concerned',
      'Current City & Country of Residence',
      'Your questions',
    ],
    image: assets.services.tarot,
    category: 'readings',
  },
  {
    id: 'akashic-reading',
    title: 'Akashic Reading',
    description:
      'A deeply reflective consultation intended to explore soul themes, recurring patterns, karmic lessons and life purpose through the channel of the Akashic Records. Many clients seek these readings to gain insight into karmic relationships, soul contracts, soulmate and twin flame connections, recurring life experiences and the deeper lessons their journey may be inviting them to understand.',
    startingPrice: '₹2,999',
    priceTiers: [{ label: 'Per question', price: '₹2,999', note: 'Audio Notes' }],
    modes: ['Audio Notes'],
    inclusions: [],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Place of Birth',
      'Your intention or question(s)',
    ],
    image: assets.highlights.tarotInsights,
    category: 'readings',
  },
  {
    id: 'astrology',
    title: 'Astrology',
    description:
      'A personalised consultation based on your birth chart, exploring planetary influences, personality, strengths, challenges, relationships, career and life cycles. Astrology offers a symbolic lens through which you can better understand yourself and navigate different phases of life with greater awareness.',
    startingPrice: '₹1,999',
    priceTiers: [
      { label: 'One aspect', price: '₹1,999', note: 'Text / Audio Notes' },
      { label: 'Every additional aspect', price: '₹1,199' },
      {
        label: 'Love Compatibility / Synastry Reading',
        price: '₹3,999',
        note: 'Matching two birth charts',
      },
      { label: 'Add-on: Voice Call', price: '+ ₹1,499' },
      { label: 'Add-on: Video Call', price: '+ ₹2,499' },
    ],
    modes: ['Text / Audio Notes', 'Voice Call', 'Video Call'],
    inclusions: [],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Exact Time of Birth',
      'Place of Birth',
      'Your area(s) of concern',
    ],
    image: assets.services.psychology,
    category: 'readings',
  },
  {
    id: 'vastu',
    title: 'Vastu',
    description:
      'Personalised consultation based on the traditional principles of Vastu Shastra, intended to explore the energetic harmony between your living or working environment and your overall well-being. Sessions include practical, non-structural recommendations that can often be implemented without demolition or major renovations, wherever appropriate.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [
      'Personalised Vastu Recommendations Report',
      'Practical Vastu Solutions (wherever possible, without major renovation)',
      'Space Optimisation Suggestions',
      'Colour & Element Recommendations (where appropriate)',
      'Optional premium inclusion: One Follow-up Clarification (within 7 days)',
    ],
    requirements: [
      'Full Name',
      'Complete Address of the Property',
      'Floor Plan / Layout',
      'Photographs and/or Videos of the Property',
      'Compass Directions (North Orientation, if known)',
      'Your specific concerns or objectives',
    ],
    notes: [
      'Not intended to replace professional architectural, engineering or legal advice, and should not be interpreted as services for spirit identification / removal, alleged exorcism, possession clearance or investigation of paranormal entities.',
    ],
    image: assets.highlights.spiritualPractices,
    category: 'analysis',
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description:
      'An exploration of the symbolic significance of numbers associated with your birth details and name. Numerology provides insight into personality traits, life themes, strengths, challenges and potential opportunities for personal growth.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [
      'Complimentary Name Modification Suggestions',
      'Complimentary Mobile Number Recommendations',
      'Complimentary Signature Enhancement Suggestions',
    ],
    requirements: [
      'Full Name (as per official records, if applicable) as well as name used in daily life',
      'Date of Birth',
      'Mobile Number',
      'Your area(s) of concern',
    ],
    image: assets.services.psychology,
    category: 'analysis',
  },
  {
    id: 'graphology',
    title: 'Graphology',
    description:
      'Handwriting and signature analysis that explores behavioural tendencies, personality characteristics, emotional patterns and communication styles through the study of handwriting. Graphology offers insight into your natural preferences and areas for personal reflection.',
    startingPrice: '₹2,499',
    priceTiers: [
      { label: 'Handwriting + Signature Analysis', price: '₹2,499', note: 'Text Report / PDF' },
    ],
    modes: ['Text Report / PDF'],
    inclusions: ['Complimentary Graphotherapy Guidance'],
    requirements: [
      'A handwritten sample in ballpoint pen',
      'Written on a plain, unruled white A4-sized sheet',
      'Approximately one full page on any topic of your spontaneous thoughts',
      'Your usual signature at the end of the page',
      'Write at your normal speed and in your usual handwriting',
      'Do not deliberately alter or improve your handwriting',
      'Scan or photograph the page in good lighting, ensuring the entire sheet is clearly visible and in focus',
      'Do not crop the edges or apply filters to the image',
      'If your handwriting varies between languages, submit the sample in the language you use most frequently',
    ],
    image: assets.services.psychology,
    category: 'analysis',
  },
  {
    id: 'palmistry',
    title: 'Palmistry',
    description:
      'A traditional interpretative practice that examines the lines, mounts and overall structure of the hands to explore personality traits, behavioural tendencies and significant life themes. Palmistry is approached as a reflective tool for self-awareness rather than a means of absolute prediction.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [
      'Detailed Palm Analysis Report',
      'Personality & Life Themes Summary',
      'Strengths & Growth Areas Report',
      'Personalised Guidance Based on Your Reading',
      'Complimentary Oracle Message',
    ],
    requirements: [
      'Clear, well-lit photographs of the front and back of both palms, with each palm showing all major lines and mounts clearly',
    ],
    image: assets.services.healing,
    category: 'analysis',
  },
  {
    id: 'face-reading',
    title: 'Face Reading',
    description:
      'An interpretative consultation based on facial features, expressions and structural characteristics traditionally associated with personality, temperament and behavioural patterns. Face Reading offers an additional perspective for self-reflection and personal insight.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [
      'Personality & Behavioural Traits Summary',
      'Strengths & Growth Areas Report',
      'Personalised Self-Reflection Insights',
    ],
    requirements: [
      'A recent, clear, front-facing photograph',
      'Natural lighting preferred',
      'Face should be fully visible without sunglasses, masks, or heavy beauty filters',
      'Hair should not obscure the forehead or facial features',
    ],
    image: assets.services.psychology,
    category: 'analysis',
  },
  {
    id: 'reiki-healing',
    title: 'Reiki Healing',
    description:
      'A gentle energy healing practice intended to promote relaxation, emotional balance and overall well-being. Many individuals seek Reiki to support stress reduction, inner calm and a greater sense of energetic harmony alongside their personal wellness journey.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: ['Post Session Summary and Personalised Insights'],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Place of Birth and current place',
      'Recent Photograph',
      'Your intention(s) for manifestation',
    ],
    notes: [
      'Energy exchange for healing services is personalised based on your unique needs and intentions. Please get in touch for a brief case discussion and a customised quote.',
    ],
    image: assets.services.healing,
    category: 'healing',
  },
  {
    id: 'pranic-healing',
    title: 'Pranic Healing',
    description:
      "An energy-based healing modality that focuses on cleansing and balancing the body's energy field. Sessions are intended to support emotional well-being, promote energetic balance and complement an individual's holistic self-care practices.",
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: ['Post Session Summary and Personalised Insights'],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Place of Birth and current place',
      'Recent Photograph',
      'Your intention(s) for manifestation',
    ],
    notes: [
      'Energy exchange for healing services is personalised based on your unique needs and intentions. Please get in touch for a brief case discussion and a customised quote.',
    ],
    image: assets.services.healing,
    category: 'healing',
  },
  {
    id: 'lama-fera-healing',
    title: 'Lama Fera Healing',
    description:
      'A traditional energy healing modality that works with sacred symbols and practices intended to promote energetic cleansing, protection and inner balance. Sessions are personalised according to your unique intentions and areas of focus.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: ['Post Session Summary and Personalised Insights'],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Place of Birth and current place',
      'Recent Photograph',
      'Your intention(s) for manifestation',
    ],
    notes: [
      'Energy exchange for healing services is personalised based on your unique needs and intentions. Please get in touch for a brief case discussion and a customised quote.',
    ],
    image: assets.services.healing,
    category: 'healing',
  },
  {
    id: 'ethical-spell-casting',
    title: 'Ethical Spell Casting & Custom Rituals',
    description:
      'A personalised spiritual ritual conducted with clear intention and ethical consideration. Depending on your circumstances and objectives, practitioners may recommend rituals intended to support areas such as self-growth, protection, harmony, abundance or emotional healing.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [
      'Detailed Post-Ritual Reflection',
      'Photo / Video Documentation of the Ritual',
      'Personalised Spiritual Recommendations (if applicable)',
    ],
    requirements: [
      'Full Name',
      'Date of Birth',
      'Place of Birth and current place',
      'Recent Photograph',
      'Your intention(s) for manifestation',
    ],
    notes: [
      'Energy exchange for spell work is personalised based on your unique needs and intentions. Please get in touch for a brief case discussion and a customised quote.',
    ],
    image: assets.services.manifestation,
    category: 'rituals',
  },
  {
    id: 'animal-communication',
    title: 'Animal Communication',
    description:
      "A compassionate and intuitive consultation intended to deepen the connection between you and your pet or animal companion, whether living or departed, through interspecies telepathic communication. Sessions may explore your animal's emotions, preferences, behavioural patterns, needs, well-being or the energetic dynamics within your relationship.",
    startingPrice: '₹1,999',
    priceTiers: [
      {
        label: 'Up to 4 messages (conveyed or received)',
        price: '₹1,999',
        note: 'Text / Audio Notes',
      },
    ],
    modes: ['Text / Audio Notes'],
    inclusions: [],
    requirements: [
      'Clear photograph of the animal',
      "Animal's Name",
      'Species / Breed (if known)',
      'Sex of the Animal',
      'Approximate Age',
      'Your question(s) or messages',
    ],
    notes: [
      'Animal Communication is a complementary spiritual practice intended for personal insight and connection. It is not a substitute for veterinary diagnosis, treatment, professional animal behaviour consultation or for finding lost animals.',
    ],
    image: assets.highlights.crystalMagic,
    category: 'other',
  },
  {
    id: 'mediumship',
    title: 'Mediumship',
    description:
      'Connect with messages and guidance through mediumship. Reach out to learn how a session can support your journey.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [],
    requirements: [],
    notes: ['Details and energy exchange are shared on enquiry. Please get in touch to discuss.'],
    image: assets.services.moonology,
    category: 'other',
  },
  {
    id: 'inner-child-healing',
    title: 'Inner Child Healing',
    description:
      'Gentle inner child work to support emotional healing, self-compassion and integration. Reach out to explore a personalised session.',
    startingPrice: null,
    priceTiers: [],
    modes: [],
    inclusions: [],
    requirements: [],
    notes: ['Details and energy exchange are shared on enquiry. Please get in touch to discuss.'],
    image: assets.services.healing,
    category: 'healing',
  },
]

export function formatServicePrice(service: ServiceOffering): string {
  if (!service.startingPrice) return CONTACT
  return service.priceTiers.length > 1
    ? `From ${service.startingPrice}`
    : service.startingPrice
}

export function buildServiceWhatsAppMessage(service: ServiceOffering): string {
  return `Hi Soul Wave India, I would like to enquire about ${service.title}.`
}
