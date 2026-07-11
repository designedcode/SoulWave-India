import { Award, Heart, Sparkles, BookOpen } from 'lucide-react'
import { assets } from '../config/assets'
import { siteConfig } from '../config/siteConfig'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FadeIn } from '../components/motion/FadeIn'
import { CrystalCluster } from '../components/decorative/CrystalCluster'
import { GoldSunburst } from '../components/decorative/GoldSunburst'
import { SEO } from '../components/SEO'

const values = [
  { icon: Heart, title: 'Compassion First', description: 'Every interaction is rooted in empathy, patience, and genuine care.' },
  { icon: Sparkles, title: 'Empowerment', description: 'Guidance that strengthens your own intuition, never creates dependency.' },
  { icon: BookOpen, title: 'Integrity', description: 'Honest readings blended with psychology-informed, evidence-based support.' },
  { icon: Award, title: 'Excellence', description: 'Continuous learning in tarot, healing arts, and therapeutic approaches.' },
]

const certifications = [
  'Certified Tarot Reader — International Tarot Guild',
  'Reiki Level II Energy Healing Practitioner',
  'Psychology of Spirituality — Continuing Education',
  'Moonology & Lunar Cycle Facilitation Training',
]

export function About() {
  return (
    <>
      <SEO path="/about" title="About | Soul Wave India"
        description={`Meet ${siteConfig.reader.name} — tarot reader, holistic healer, and psychology-guided wellness guide at Soul Wave India.`}
      />
      <Section className="pt-28 md:pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn direction="none" className="relative">
              <div className="rounded-[var(--radius-card)] overflow-hidden shadow-xl">
                <img
                  src={assets.about.portrait}
                  alt={siteConfig.reader.name}
                  width={600}
                  height={899}
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[700px]"
                />
              </div>
              <CrystalCluster className="absolute -bottom-4 -right-4 opacity-75" size={64} />
              <GoldSunburst className="absolute -top-3 -left-2 opacity-70" size={36} />
            </FadeIn>
            <FadeIn>
              <p className="font-accent text-3xl text-mauve mb-2">About</p>
              <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">{siteConfig.reader.name}</h1>
              <p className="text-gold font-medium mb-6">{siteConfig.reader.title}</p>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  My journey into tarot and holistic wellness began over a decade ago, born from my own search
                  for meaning during a challenging chapter of life. What started as personal exploration evolved
                  into a calling — to hold space for others navigating their own crossroads.
                </p>
                <p>
                  I studied tarot under master readers, trained in Reiki and chakra healing, and pursued
                  psychology courses to ground my intuitive work in evidence-informed practice. Soul Wave India
                  was born from a vision: a luxury wellness sanctuary that feels nothing like a typical astrology site.
                </p>
                <p>
                  Today, I serve clients across India and worldwide — offering readings that honor both the mystical
                  and the practical, helping you find clarity you can actually use.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <SectionHeading accent="Philosophy" title="My Approach" align="left" />
            <p className="text-warm-gray leading-relaxed max-w-3xl mb-16">
              I believe tarot is a mirror — not a crystal ball. Combined with moonology, energy healing, and
              psychological insight, each session becomes a conversation with your deeper self. My role is to
              translate what emerges into compassionate, actionable guidance you can trust.
            </p>
          </FadeIn>

          <FadeIn>
            <SectionHeading accent="Credentials" title="Certifications & Experience" align="left" />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-3xl">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3 text-warm-gray text-sm">
                  <Award size={18} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  {cert}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <SectionHeading accent="Core Values" title="What I Stand For" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center p-6 rounded-[var(--radius-card)] bg-white/60 border border-blush/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lavender/30 text-mauve mb-3">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-2">{title}</h3>
                  <p className="text-warm-gray text-sm">{description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
