import { useState, type FormEvent } from 'react'
import { MessageCircle, Mail, Clock } from 'lucide-react'
import { InstagramIcon } from '../components/ui/InstagramIcon'
import { siteConfig } from '../config/siteConfig'
import { buildContactWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { FadeIn } from '../components/motion/FadeIn'
import { FAQSection } from '../components/home/FAQSection'
import { SEO } from '../components/SEO'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = buildContactWhatsAppMessage(name, email, message)
    openWhatsApp(siteConfig.whatsapp.phone, text)
  }

  return (
    <>
      <SEO path="/contact" title="Contact | Soul Wave India"
        description="Get in touch with Soul Wave India via WhatsApp, Instagram, or our contact form."
      />
      <Section className="pt-28 md:pt-32">
        <Container>
          <SectionHeading
            accent="Reach Out"
            title="Contact Us"
            subtitle="We would love to hear from you. Send a message and we will respond within 24 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            <FadeIn>
              <form
                onSubmit={handleSubmit}
                className="rounded-[var(--radius-card)] bg-white/70 border border-blush/30 p-6 md:p-8 shadow-sm"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-12 px-4 rounded-xl border border-blush/50 bg-ivory/50 font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-12 px-4 rounded-xl border border-blush/50 bg-ivory/50 font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-ivory/50 font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 resize-y"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle size={20} aria-hidden="true" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-4">Connect Directly</h3>
                  <div className="flex flex-col gap-3">
                    <Button
                      href={`https://wa.me/${siteConfig.whatsapp.phone}`}
                      variant="whatsapp"
                      size="md"
                      external
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      WhatsApp {siteConfig.whatsapp.display}
                    </Button>
                    <Button href={siteConfig.social.instagram} variant="secondary" size="md" external>
                      <InstagramIcon size={18} />
                      Instagram
                    </Button>
                  </div>
                </div>

                <div className="rounded-[var(--radius-card)] bg-lavender/15 p-6 border border-lavender/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={20} className="text-mauve" aria-hidden="true" />
                    <h3 className="font-heading text-lg text-charcoal">Business Hours</h3>
                  </div>
                  <p className="text-warm-gray text-sm">{siteConfig.contact.hours}</p>
                </div>

                <div className="rounded-[var(--radius-card)] bg-rose-quartz/30 p-6 border border-blush/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={20} className="text-mauve" aria-hidden="true" />
                    <h3 className="font-heading text-lg text-charcoal">Email</h3>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-warm-gray text-sm hover:text-gold transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <FAQSection
        className="bg-rose-quartz/20 pt-8 md:pt-12"
        headingId="contact-faq-heading"
      />
    </>
  )
}
