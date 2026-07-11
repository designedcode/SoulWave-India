import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Star, ChevronDown } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { CountUp } from '../motion/CountUp'
import { WatercolorBlob } from '../decorative/WatercolorBlob'
import { GoldParticles } from '../decorative/GoldParticles'
import { BotanicalFloat } from '../decorative/BotanicalFloat'
import { MoonIllustration } from '../decorative/MoonIllustration'

export function HeroSection() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.defaultMessage,
  )

  return (
    <section className="relative min-h-svh flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #F7F2EC 0%, #F3DDD7 30%, #D8C9E8 60%, #E9CFCB 100%)',
        }}
        aria-hidden="true"
      />
      <WatercolorBlob className="top-10 -left-20 w-72 h-72" color="rgba(184, 195, 177, 0.35)" />
      <WatercolorBlob className="bottom-20 -right-16 w-96 h-96" color="rgba(216, 201, 232, 0.3)" />
      <GoldParticles count={15} />

      <BotanicalFloat className="absolute top-32 left-8 opacity-60 hidden md:block" />
      <BotanicalFloat className="absolute bottom-40 right-12 opacity-50 hidden lg:block" />
      <MoonIllustration className="absolute top-28 right-8 md:right-16 opacity-70" size={64} />

      <Container className="relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-accent text-3xl md:text-4xl text-mauve mb-4"
            >
              Soul Wave India
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6"
            >
              Find Clarity Through Tarot, Healing &amp; Psychology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-warm-gray text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Personalized guidance combining intuition, psychology and holistic healing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
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
              className="flex flex-wrap items-center gap-4 text-sm text-warm-gray"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
                <span className="sr-only">{siteConfig.stats.rating} out of 5 stars</span>
              </div>
              <span>
                <CountUp end={siteConfig.stats.clients} suffix="+" className="font-semibold text-charcoal" /> Happy Clients
              </span>
              <span className="hidden sm:inline text-blush">|</span>
              <span>Trusted Worldwide</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto max-w-md lg:max-w-none"
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
