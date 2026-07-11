import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface WatercolorBlobProps {
  className?: string
  color?: string
}

export function WatercolorBlob({
  className = '',
  color = 'rgba(216, 201, 232, 0.4)',
}: WatercolorBlobProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: color }}
      animate={
        reduced
          ? {}
          : {
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
              y: [0, -15, 0],
            }
      }
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  )
}
