import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '../ui/InstagramIcon'
import { LinkedInIcon } from '../ui/LinkedInIcon'
import { siteConfig } from '../../config/siteConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Container } from '../ui/Container'

export function Footer() {
  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.defaultMessage,
  )

  return (
    <footer className="bg-charcoal text-ivory/90 pt-16 pb-28 md:pb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <p className="font-heading text-2xl text-ivory mb-3">{siteConfig.brand}</p>
            <p className="font-accent text-2xl text-gold/80 mb-2">{siteConfig.tagline}</p>
            <p className="text-sm text-ivory/60 leading-relaxed">
              Personalized tarot readings and holistic wellness guidance rooted in psychology and intuition.
            </p>
          </div>

          <div>
            <p className="font-heading text-lg text-ivory mb-4">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors min-h-12"
                >
                  <InstagramIcon size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors min-h-12"
                >
                  <LinkedInIcon size={18} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors min-h-12"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors min-h-12"
                >
                  <Mail size={18} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-lg text-ivory mb-4">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-ivory/70 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 text-center text-sm text-ivory/50">
          &copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
