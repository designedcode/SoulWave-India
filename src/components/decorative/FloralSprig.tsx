import { useId } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface FloralSprigProps {
  className?: string
  size?: number
}

export function FloralSprig({ className = '', size = 72 }: FloralSprigProps) {
  const reduced = useReducedMotion()
  const uid = useId()
  const pinkId = `${uid}-floralPink`
  const leafId = `${uid}-leafSage`

  return (
    <motion.svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 80 100"
      fill="none"
      className={`pointer-events-none ${className}`}
      animate={reduced ? {} : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={pinkId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E0DC" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#E9CFCB" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E9CFCB" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={leafId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C5D0BE" />
          <stop offset="100%" stopColor="#8EAA91" />
        </linearGradient>
      </defs>

      <ellipse cx="28" cy="88" rx="12" ry="10" fill={`url(#${pinkId})`} />
      <ellipse cx="42" cy="90" rx="10" ry="8" fill={`url(#${pinkId})`} opacity="0.85" />
      <circle cx="28" cy="88" r="3" fill="#F0D8D4" opacity="0.6" />
      <circle cx="42" cy="90" r="2.5" fill="#F0D8D4" opacity="0.5" />

      <path
        d="M36 86 C36 70 38 55 40 20"
        stroke="#7A9478"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      <ellipse cx="28" cy="32" rx="9" ry="5" fill={`url(#${leafId})`} opacity="0.85" transform="rotate(-35 28 32)" />
      <ellipse cx="52" cy="38" rx="10" ry="5.5" fill={`url(#${leafId})`} opacity="0.8" transform="rotate(40 52 38)" />
      <ellipse cx="26" cy="50" rx="8" ry="4.5" fill={`url(#${leafId})`} opacity="0.75" transform="rotate(-40 26 50)" />
      <ellipse cx="54" cy="55" rx="9" ry="5" fill={`url(#${leafId})`} opacity="0.8" transform="rotate(35 54 55)" />
      <ellipse cx="30" cy="68" rx="7" ry="4" fill={`url(#${leafId})`} opacity="0.7" transform="rotate(-30 30 68)" />
      <ellipse cx="48" cy="72" rx="7.5" ry="4" fill={`url(#${leafId})`} opacity="0.7" transform="rotate(28 48 72)" />
      <ellipse cx="40" cy="22" rx="6" ry="3.5" fill={`url(#${leafId})`} opacity="0.85" transform="rotate(-10 40 22)" />
    </motion.svg>
  )
}
