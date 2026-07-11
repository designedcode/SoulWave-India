import { useId } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { LotusMotif } from './LotusMotif'
import { GoldSunburst } from './GoldSunburst'

export function SectionDivider({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion()
  const uid = useId()
  const leftGrad = `${uid}-goldL`
  const rightGrad = `${uid}-goldR`

  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`} aria-hidden="true">
      <svg width="80" height="12" viewBox="0 0 80 12" fill="none" className="hidden sm:block">
        <motion.path
          d="M0 6 Q20 0 40 6 T80 6"
          stroke={`url(#${leftGrad})`}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 1.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id={leftGrad} x1="0" y1="0" x2="80" y2="0">
            <stop offset="0%" stopColor="#D6B57A" stopOpacity="0" />
            <stop offset="100%" stopColor="#D6B57A" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      <GoldSunburst size={20} className="opacity-80" />
      <LotusMotif size={28} className="opacity-75" />
      <GoldSunburst size={20} className="opacity-80" />

      <svg width="80" height="12" viewBox="0 0 80 12" fill="none" className="hidden sm:block">
        <motion.path
          d="M0 6 Q20 12 40 6 T80 6"
          stroke={`url(#${rightGrad})`}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 1.2, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id={rightGrad} x1="0" y1="0" x2="80" y2="0">
            <stop offset="0%" stopColor="#D6B57A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D6B57A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
