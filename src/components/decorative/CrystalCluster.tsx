import { useId } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CrystalClusterProps {
  className?: string
  size?: number
}

export function CrystalCluster({ className = '', size = 64 }: CrystalClusterProps) {
  const reduced = useReducedMotion()
  const uid = useId()
  const mainId = `${uid}-crystalMain`
  const leftId = `${uid}-crystalLeft`
  const rightId = `${uid}-crystalRight`

  return (
    <motion.svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 70 78"
      fill="none"
      className={`pointer-events-none ${className}`}
      animate={reduced ? {} : { y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={mainId} x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#F8E8E4" />
          <stop offset="40%" stopColor="#E9CFCB" />
          <stop offset="100%" stopColor="#D4A8A2" />
        </linearGradient>
        <linearGradient id={leftId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2DCD8" />
          <stop offset="100%" stopColor="#C9928C" />
        </linearGradient>
        <linearGradient id={rightId} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E4E0" />
          <stop offset="100%" stopColor="#D9AFA8" />
        </linearGradient>
      </defs>

      <path d="M18 68 L10 42 L18 28 L28 42 Z" fill={`url(#${leftId})`} opacity="0.85" />
      <path d="M18 28 L18 68 L28 42 Z" fill="#E9CFCB" opacity="0.45" />

      <path d="M52 70 L44 44 L54 30 L64 46 Z" fill={`url(#${rightId})`} opacity="0.85" />
      <path d="M54 30 L54 70 L44 44 Z" fill="#F0D8D4" opacity="0.4" />

      <path d="M35 72 L22 40 L35 8 L48 40 Z" fill={`url(#${mainId})`} opacity="0.9" />
      <path d="M35 8 L35 72 L48 40 Z" fill="#F5E0DC" opacity="0.35" />
      <path d="M35 8 L28 28 L35 40 L42 28 Z" fill="#FFFFFF" opacity="0.25" />
    </motion.svg>
  )
}
