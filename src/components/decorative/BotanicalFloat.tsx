import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface BotanicalFloatProps {
  className?: string
}

export function BotanicalFloat({ className = '' }: BotanicalFloatProps) {
  const reduced = useReducedMotion()

  return (
    <motion.svg
      width="60"
      height="80"
      viewBox="0 0 60 80"
      fill="none"
      className={className}
      animate={reduced ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <path
        d="M30 75 Q30 40 30 10 M30 40 Q10 35 5 20 M30 40 Q50 35 55 20 M30 55 Q15 50 12 38 M30 55 Q45 50 48 38"
        stroke="#8EAA91"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <ellipse cx="5" cy="18" rx="4" ry="6" stroke="#B8C3B1" strokeWidth="0.8" fill="none" />
      <ellipse cx="55" cy="18" rx="4" ry="6" stroke="#B8C3B1" strokeWidth="0.8" fill="none" />
    </motion.svg>
  )
}
