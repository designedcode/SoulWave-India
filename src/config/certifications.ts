export interface Certification {
  title: string
  issuer: string
  issued?: string
  credentialId?: string
  note?: string
  skills?: string[]
}

export const certifications: Certification[] = [
  {
    title: 'Short Term Certificate Course in Forensic Psychology And Criminal Profiling',
    issuer: 'International Forensic Sciences (IFS)',
    credentialId: '20200917-702',
    note: 'Associated with the education department of IFS, a GOI Regd, Court Appointed Commission',
    skills: ['Criminal Profiling', 'Forensic Psychology'],
  },
  {
    title: 'Certified Family & Couples Therapy Practitioner',
    issuer: 'Socially Souled',
    issued: 'Nov 2024',
  },
  {
    title: 'Certified Clinical Hypnotherapist',
    issuer: 'California Hypnosis Institute, USA',
    issued: 'Dec 2024',
    skills: ['Hypnotherapy'],
  },
  {
    title: 'Certified Cognitive Behaviour Therapy (CBT) Practitioner',
    issuer: 'The Mind Point',
  },
  {
    title: 'Certified Akashik Records Reader',
    issuer: 'Psychic Insights',
  },
  {
    title: 'Certified Neuro-Linguistic Programming (NLP) Practitioner',
    issuer: 'Mind Masters',
    issued: 'Sep 2024',
  },
  {
    title: 'Certified Career Counselor',
    issuer: 'Samadham Goyam in association with Counselor Council of India',
    skills: ['Customer Service'],
  },
  {
    title: 'Certified Mentalist',
    issuer: 'Amit Kalantri Magic',
    skills: ['Occult Sciences'],
  },
  {
    title: 'Certified Graphologist & Graphotherapist',
    issuer: 'Graphology Insights',
    skills: ['Occult Sciences', 'Customer Service'],
  },
  {
    title: 'Certified Animal & Nature / Interspecies Telepathic Communicator',
    issuer: 'Sedona International School for Animal & Nature Communication',
    skills: ['Interspecies Telepathic Communication', 'Business Development'],
  },
  {
    title: 'Certified Tarot & Oracle Reader',
    issuer: 'Tarot Tree Of Life',
    skills: ['Tarot Reading', 'Business Development'],
  },
]
