import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Calendar } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Button } from '../ui/Button'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.defaultMessage,
  )

  return (
    <>
      {/* Mobile bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-blush/40 px-4 py-3 safe-area-pb"
          >
            <div className="flex gap-3 max-w-lg mx-auto">
              <Button
                href={siteConfig.booking.calendly}
                variant="primary"
                size="md"
                external
                className="flex-1 animate-pulse-soft"
              >
                <Calendar size={18} aria-hidden="true" />
                Book Reading
              </Button>
              <Button href={waUrl} variant="whatsapp" size="md" external className="flex-1">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating WhatsApp pill */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 bg-whatsapp text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow min-h-12"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={22} aria-hidden="true" />
            <span className="font-body font-medium text-sm">WhatsApp</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
