import { useId } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface OrganicArchProps {
  className?: string
  size?: number
}

export function OrganicArch({ className = '', size = 80 }: OrganicArchProps) {
  const reduced = useReducedMotion()
  const uid = useId()
  const fillId = `${uid}-archFill`
  const leafId = `${uid}-archLeaf`

  return (
    <motion.svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 80 92"
      fill="none"
      className={`pointer-events-none ${className}`}
      animate={reduced ? {} : { y: [0, -5, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={fillId} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0E8DE" />
          <stop offset="100%" stopColor="#E5D9CC" />
        </linearGradient>
        <linearGradient id={leafId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A8BBA5" />
          <stop offset="100%" stopColor="#7A9478" />
        </linearGradient>
      </defs>

      <path
        d="M12 88 L12 42 C12 18 28 6 40 6 C52 6 68 18 68 42 L68 88 Z"
        fill={`url(#${fillId})`}
        opacity="0.9"
      />

      <path
        d="M58 78 C60 60 62 45 64 28"
        stroke="#7A9478"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="54" cy="38" rx="8" ry="4.5" fill={`url(#${leafId})`} opacity="0.85" transform="rotate(-40 54 38)" />
      <ellipse cx="70" cy="44" rx="7" ry="4" fill={`url(#${leafId})`} opacity="0.8" transform="rotate(35 70 44)" />
      <ellipse cx="52" cy="55" rx="7.5" ry="4" fill={`url(#${leafId})`} opacity="0.8" transform="rotate(-38 52 55)" />
      <ellipse cx="72" cy="58" rx="6.5" ry="3.5" fill={`url(#${leafId})`} opacity="0.75" transform="rotate(30 72 58)" />
      <ellipse cx="55" cy="68" rx="6" ry="3.5" fill={`url(#${leafId})`} opacity="0.7" transform="rotate(-32 55 68)" />
      <ellipse cx="64" cy="30" rx="5.5" ry="3" fill={`url(#${leafId})`} opacity="0.85" transform="rotate(-15 64 30)" />
    </motion.svg>
  )
}
