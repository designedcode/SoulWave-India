import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Heart, Sparkles, BookOpen, ChevronDown } from 'lucide-react'
import { assets } from '../config/assets'
import { certifications } from '../config/certifications'
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

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-warm-gray leading-relaxed text-base md:text-[1.05rem]">
      {children}
    </div>
  )
}

export function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <SEO
        path="/about"
        title="About | Soul Wave India"
        description={`Meet ${siteConfig.reader.name} — tarot reader, holistic healer, and psychology-guided wellness guide at Soul Wave India.`}
      />

      <Section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <FadeIn direction="none" className="relative lg:sticky lg:top-28">
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
              <p className="font-accent text-3xl text-mauve mb-2">Our Story</p>
              <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
                Welcome to Soul Wave India
              </h1>
              <p className="text-gold font-medium mb-8">
                {siteConfig.reader.name} · {siteConfig.reader.title}
              </p>

              <Prose>
                <p>
                  Have you ever wondered why certain people, places or moments find their way into your life
                  exactly when you need them most?
                </p>
                <p>Or why some questions refuse to leave your heart until they are acknowledged?</p>
                <p>Perhaps you didn’t arrive here by accident.</p>
                <p>
                  Perhaps you’ve been carrying a quiet uncertainty. Perhaps you’re standing at a crossroads,
                  searching for clarity, hoping for reassurance or simply longing for someone to hold space for
                  what words have struggled to express.
                </p>
                <p>And perhaps… your journey has led you here for a reason.</p>
              </Prose>

              <button
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
                className="group flex w-full items-center justify-between gap-4 mt-6 rounded-[var(--radius-card)] border border-blush/30 bg-white/60 backdrop-blur-sm px-6 md:px-8 py-5 text-left min-h-12 transition-colors hover:bg-blush/20 hover:border-blush/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-expanded={showMore}
              >
                <span className="font-heading text-lg md:text-xl text-charcoal transition-colors group-hover:text-gold">
                  {showMore ? 'View less' : 'View more'}
                </span>
                <motion.span
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-gold transition-transform group-hover:scale-110"
                >
                  <ChevronDown size={22} aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {showMore && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5">
                      <Prose>
                        <p>
                          Many spiritual traditions speak of synchronicity, that seemingly ordinary encounters are
                          often anything but ordinary. That souls don’t merely meet by chance; they find one
                          another when the time is right. Whether you call it divine timing, the Universe,
                          destiny, intuition, synchronicity or simply life’s beautiful unfolding, there is
                          something profoundly comforting about believing that every experience has the potential
                          to guide us a little closer to ourselves.
                        </p>
                        <p>That belief is where Soul Wave India began.</p>
                        <p>
                          It was born from a simple intention: to create a safe, compassionate space where people
                          feel seen, heard and gently guided through life’s uncertainties. A space where you
                          don’t have to arrive with perfect words or perfect certainty. Where you are welcomed
                          exactly as you are—with your questions, your hopes, your fears, your dreams, and every
                          beautifully imperfect part of your story.
                        </p>
                        <p>Because before anything else, you’re human.</p>
                        <p>
                          And being human can be wonderfully meaningful… and, at times, incredibly overwhelming.
                        </p>
                        <p>
                          Life asks so much of us. It invites us to love, to let go, to begin again, to grieve, to
                          trust, to grow and sometimes to simply pause and breathe. In the midst of all this, it
                          is only natural to seek perspective, to look for a gentle light when the path ahead
                          feels uncertain.
                        </p>
                        <p>
                          Our work integrates intuitive spiritual practices with empathy, integrity and mindful
                          guidance. Every consultation is approached with respect for your individuality, your
                          choices and your journey. Rather than offering certainty or control over the future, we
                          aim to provide clarity, perspective and a space for meaningful reflection, empowering
                          you to make decisions that align with your values and aspirations. In a world that often
                          urges us to seek answers outside ourselves, we strive to help you reconnect with the
                          wisdom that already exists within.
                        </p>
                        <p>
                          Because often, clarity isn’t about predicting the future.
                          <br />
                          It’s about remembering the wisdom that has quietly existed within you all along.
                        </p>
                        <p>
                          Our role is never to decide your path for you, but to walk alongside you with
                          compassion, offering insight, reflection and a different lens through which you may see
                          your circumstances.
                        </p>
                        <p>
                          Our vision is to nurture a compassionate community where spirituality is practised with
                          authenticity, ethical responsibility and heartfelt intention, and where every
                          individual feels safe to seek guidance without fear of judgement and empowered to
                          reconnect with their own inner compass.
                        </p>
                        <p>At the heart of everything we do is a simple belief:</p>
                        <p className="font-heading text-xl md:text-2xl text-charcoal leading-snug">
                          You are not here to be fixed. You are here to be understood, supported and gently
                          guided back to yourself.
                        </p>
                        <p>
                          So, if this page found you during a season of uncertainty, transition, hope or quiet
                          curiosity, know that you are welcome here.
                        </p>
                        <p>
                          Take your time.
                          <br />
                          Explore.
                          <br />
                          Read.
                          <br />
                          Reflect.
                        </p>
                        <p>
                          And whenever it feels right, we’d be honoured to walk beside you for a little while.
                        </p>
                        <p>
                          Welcome to Soul Wave India.
                          <br />
                          We’re truly glad you found us.
                        </p>
                      </Prose>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          </div>

          <FadeIn>
            <SectionHeading accent="Core Values" title="What I Stand For" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="text-center p-6 rounded-[var(--radius-card)] bg-white/60 border border-blush/20"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lavender/30 text-mauve mb-3">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-2">{title}</h3>
                  <p className="text-warm-gray text-sm">{description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <SectionHeading
              accent="Credentials"
              title="Licenses & Certifications"
              subtitle="Training and credentials that ground our intuitive practice in integrity, empathy, and professional care. Tap any credential to verify on LinkedIn."
              align="left"
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {certifications.map((cert) => (
                <li key={`${cert.title}-${cert.issuer}`}>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 h-full p-5 rounded-[var(--radius-card)] bg-white/50 border border-blush/25 transition-colors hover:bg-blush/15 hover:border-blush/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    aria-label={`${cert.title} — verify on LinkedIn`}
                  >
                    <div className="shrink-0 mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-lavender/30 text-gold">
                      <Award size={18} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base md:text-lg text-charcoal leading-snug mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-mauve text-sm font-medium mb-1">{cert.issuer}</p>
                      {(cert.issued || cert.credentialId) && (
                        <p className="text-warm-gray text-sm mb-1">
                          {cert.issued && <span>Issued {cert.issued}</span>}
                          {cert.issued && cert.credentialId && <span> · </span>}
                          {cert.credentialId && <span>Credential ID {cert.credentialId}</span>}
                        </p>
                      )}
                      {cert.note && (
                        <p className="text-warm-gray text-sm leading-relaxed mb-2">{cert.note}</p>
                      )}
                      {cert.skills && cert.skills.length > 0 && (
                        <p className="text-warm-gray/90 text-xs tracking-wide">
                          {cert.skills.join(' · ')}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
