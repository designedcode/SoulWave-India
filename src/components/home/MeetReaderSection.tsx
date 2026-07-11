import { assets } from '../../config/assets'
import { siteConfig } from '../../config/siteConfig'
import { Section } from '../ui/Section'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { FadeIn } from '../motion/FadeIn'
import { MoonIllustration } from '../decorative/MoonIllustration'

export function MeetReaderSection() {
  return (
    <Section className="bg-gradient-to-br from-lavender/20 via-ivory to-blush/20 overflow-hidden" ariaLabelledby="reader-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn direction="none" className="relative order-2 lg:order-1">
            <div className="relative rounded-[var(--radius-card)] overflow-hidden shadow-xl">
              <img
                src={assets.about.portrait}
                alt={`${siteConfig.reader.name}, ${siteConfig.reader.title}`}
                width={600}
                height={899}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-transparent" />
            </div>
            <MoonIllustration className="absolute -bottom-6 -right-6 opacity-60" size={72} />
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <p className="font-accent text-3xl text-mauve mb-2">Meet Your Reader</p>
            <h2 id="reader-heading" className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              {siteConfig.reader.name}
            </h2>
            <p className="text-gold font-medium mb-4">{siteConfig.reader.title}</p>
            <p className="text-warm-gray leading-relaxed mb-4">
              With over a decade of experience in tarot, holistic healing, and psychology-informed guidance,
              I created Soul Wave India as a peaceful sanctuary for those seeking clarity without judgment.
            </p>
            <p className="text-warm-gray leading-relaxed mb-4">
              My approach weaves together intuitive tarot readings, moonology, and evidence-based psychological
              principles — helping you navigate love, career, and personal growth with both heart and wisdom.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Every session is confidential, personalized, and designed to leave you feeling empowered —
              not dependent — on your own inner knowing.
            </p>
            <Button to="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
