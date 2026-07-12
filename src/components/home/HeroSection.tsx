import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Star, ChevronDown } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { CountUp } from '../motion/CountUp'
import { RotatingWord, usePhraseCycle } from '../motion/RotatingWord'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const HEADLINE_PHRASES = [
  { lead: 'Clarity', target: 'Soul' },
  { lead: 'Clarity', target: 'Mind' },
  { lead: 'Peace', target: 'Mind', breakAroundFor: true },
  { lead: 'Peace', target: 'Heart', breakAroundFor: true },
  { lead: 'Healing', target: 'Heart' },
  { lead: 'Healing', target: 'Spirit' },
  { lead: 'Clarity', target: 'Spirit' },
] as const

export function HeroSection() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.defaultMessage,
  )
  const reduced = useReducedMotion()
  const phraseIndex = usePhraseCycle({
    length: HEADLINE_PHRASES.length,
    intervalMs: 4500,
    enabled: !reduced,
  })
  const current = HEADLINE_PHRASES[phraseIndex]

  return (
    <section className="relative min-h-svh flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.hero.background})`,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-normal leading-[1.3] mb-6 text-charcoal tracking-[0.04em] px-[0.08em]"
              style={{ fontFamily: 'cursive', fontSize: '92px' }}
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="sr-only">
                {current.lead} for your {current.target}
              </span>
              <span aria-hidden="true" className="inline">
                <RotatingWord word={current.lead} motion="clip" duration={1} />
                {'breakAroundFor' in current && current.breakAroundFor ? (
                  <>
                    {/* Mobile: break before "for" */}
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    for
                    {/* Desktop: break after "for" */}
                    <br className="hidden md:block" />
                    {' your '}
                  </>
                ) : (
                  ' for your '
                )}
                <RotatingWord word={current.target} motion="clip" duration={1} />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Personalized guidance combining tarot, psychology and holistic healing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 items-center sm:items-start"
            >
              <Button href={siteConfig.booking.calendly} variant="primary" size="lg" external className="animate-pulse-soft">
                <Calendar size={20} aria-hidden="true" />
                Book Reading
              </Button>
              <Button href={waUrl} variant="secondary" size="lg" external>
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-warm-gray"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
                <span className="sr-only">{siteConfig.stats.rating} out of 5 stars</span>
              </div>
              <span>
                Trusted by <CountUp end={1000} suffix="+" className="font-semibold text-charcoal" /> Souls Worldwide
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto max-w-md lg:max-w-none hidden sm:flex"
          >
            <div className="relative rounded-[var(--radius-card)] overflow-hidden shadow-[0_20px_60px_rgba(214,181,122,0.25)]">
              <img
                src={assets.hero.portrait}
                alt="Soul Wave India wellness sanctuary"
                width={800}
                height={671}
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft" aria-hidden="true">
        <ChevronDown size={24} className="text-mauve/60" />
      </div>
    </section>
  )
}
