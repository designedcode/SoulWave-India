import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface MoonIllustrationProps {
  className?: string
  size?: number
}

export function MoonIllustration({ className = '', size = 80 }: MoonIllustrationProps) {
  const reduced = useReducedMotion()

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      animate={reduced ? {} : { rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" stroke="#D6B57A" strokeWidth="0.5" opacity="0.4" />
      <path
        d="M50 15 C35 15 25 28 25 42 C25 56 35 68 52 68 C42 62 38 52 38 40 C38 28 44 18 50 15Z"
        stroke="#A78AB5"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="48" cy="28" r="2" fill="#D6B57A" opacity="0.6" />
      <circle cx="42" cy="38" r="1.5" fill="#D6B57A" opacity="0.4" />
      <circle cx="46" cy="50" r="1" fill="#D6B57A" opacity="0.3" />
    </motion.svg>
  )
}
