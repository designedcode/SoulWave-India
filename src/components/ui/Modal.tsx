import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
}

export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const reduced = useReducedMotion()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const frame = requestAnimationFrame(() => {
      closeRef.current?.focus()
    })

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
      previouslyFocused.current?.focus?.()
    }
  }, [open])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <motion.div
            role="presentation"
            className="absolute inset-0 bg-charcoal/45 backdrop-blur-[2px]"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onCloseRef.current()}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[var(--radius-card)] bg-white shadow-xl sm:max-h-[85vh] sm:max-w-lg sm:rounded-[var(--radius-card)]"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-blush/40 px-5 py-4 sm:px-6">
              <h2
                id={titleId}
                className="font-heading text-xl sm:text-2xl text-charcoal pr-2"
              >
                {title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="shrink-0 -mr-1 -mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal/70 hover:bg-blush/40 hover:text-charcoal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Close"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
              {children}
            </div>

            {footer ? (
              <div className="border-t border-blush/40 px-5 py-4 sm:px-6 bg-white">
                {footer}
              </div>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
