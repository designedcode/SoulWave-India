import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function SectionDivider({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <div className={`flex justify-center py-4 ${className}`} aria-hidden="true">
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
        <motion.path
          d="M0 6 Q30 0 60 6 T120 6"
          stroke="url(#goldGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 1.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="120" y2="0">
            <stop offset="0%" stopColor="#D6B57A" stopOpacity="0" />
            <stop offset="50%" stopColor="#D6B57A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D6B57A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
