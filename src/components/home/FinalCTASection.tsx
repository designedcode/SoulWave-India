import { MessageCircle, Calendar } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { assets } from '../../config/assets'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { FadeIn } from '../motion/FadeIn'
import { GoldSunburst } from '../decorative/GoldSunburst'
import { LotusMotif } from '../decorative/LotusMotif'
import { FloralSprig } from '../decorative/FloralSprig'

export function FinalCTASection() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.defaultMessage,
  )

  return (
    <Section className="relative overflow-hidden" ariaLabelledby="cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={assets.decorative.ctaBackground}
          alt=""
          width={800}
          height={534}
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-lavender/40 via-ivory/90 to-blush/40 animate-breathe" />
      </div>
      <GoldSunburst className="absolute top-10 left-4 sm:left-12 opacity-70" size={40} />
      <GoldSunburst className="absolute bottom-12 right-6 sm:right-16 opacity-60" size={32} />
      <LotusMotif className="absolute top-16 right-4 sm:right-20 opacity-55" size={44} />
      <FloralSprig className="absolute bottom-8 left-6 sm:left-20 opacity-65" size={48} />

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto py-8 md:py-16">
            <p className="font-accent text-3xl md:text-4xl text-mauve mb-4">Begin Your Journey</p>
            <h2 id="cta-heading" className="font-heading text-3xl md:text-5xl text-charcoal mb-6">
              Ready to Find Clarity?
            </h2>
            <p className="text-warm-gray text-lg mb-10 leading-relaxed">
              Book your reading today and take the first gentle step toward understanding, healing, and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteConfig.booking.calendly} variant="primary" size="lg" external className="animate-pulse-soft">
                <Calendar size={20} aria-hidden="true" />
                Book Your Reading Today
              </Button>
              <Button href={waUrl} variant="whatsapp" size="lg" external>
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
