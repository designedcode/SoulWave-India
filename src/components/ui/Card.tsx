import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({
  children,
  className = '',
  hover = true,
  onClick,
}: CardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`rounded-[var(--radius-card)] bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(61,56,53,0.08)] border border-blush/30 overflow-hidden ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      whileHover={
        hover && !reduced
          ? { y: -6, boxShadow: '0 12px 40px rgba(214, 181, 122, 0.2)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
