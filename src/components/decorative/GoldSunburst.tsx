import { useId } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface GoldSunburstProps {
  className?: string
  size?: number
}

export function GoldSunburst({ className = '', size = 48 }: GoldSunburstProps) {
  const reduced = useReducedMotion()
  const uid = useId()
  const foilId = `${uid}-goldFoil`

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`pointer-events-none ${className}`}
      animate={reduced ? {} : { rotate: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={foilId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8D0A0" />
          <stop offset="50%" stopColor="#D6B57A" />
          <stop offset="100%" stopColor="#C4A05E" />
        </linearGradient>
      </defs>

      <path d="M24 2 L25.2 20.5 L24 22 L22.8 20.5 Z" fill={`url(#${foilId})`} />
      <path d="M24 46 L25.2 27.5 L24 26 L22.8 27.5 Z" fill={`url(#${foilId})`} />
      <path d="M2 24 L20.5 22.8 L22 24 L20.5 25.2 Z" fill={`url(#${foilId})`} />
      <path d="M46 24 L27.5 22.8 L26 24 L27.5 25.2 Z" fill={`url(#${foilId})`} />

      <path d="M9.5 9.5 L20.2 20.2 L19.2 21.2 L18.8 19.8 Z" fill={`url(#${foilId})`} opacity="0.9" />
      <path d="M38.5 9.5 L27.8 20.2 L28.8 21.2 L29.2 19.8 Z" fill={`url(#${foilId})`} opacity="0.9" />
      <path d="M9.5 38.5 L20.2 27.8 L21.2 28.8 L19.8 29.2 Z" fill={`url(#${foilId})`} opacity="0.9" />
      <path d="M38.5 38.5 L27.8 27.8 L26.8 28.8 L28.2 29.2 Z" fill={`url(#${foilId})`} opacity="0.9" />

      <path d="M24 20 L28 24 L24 28 L20 24 Z" fill={`url(#${foilId})`} />
    </motion.svg>
  )
}
