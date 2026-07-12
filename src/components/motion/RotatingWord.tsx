import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type RotateMotion = 'fade' | 'slide' | 'clip'

interface RotatingWordProps {
  word: string
  /** Visual transition when the word changes */
  motion?: RotateMotion
  /** Transition duration in seconds */
  duration?: number
  className?: string
}

const MOTION_VARIANTS: Record<
  RotateMotion,
  {
    initial: Record<string, number | string>
    animate: Record<string, number | string>
    exit: Record<string, number | string>
  }
> = {
  fade: {
    initial: { opacity: 0, filter: 'blur(5px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(5px)' },
  },
  slide: {
    initial: { opacity: 0, x: 14 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -14 },
  },
  clip: {
    initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
    exit: { opacity: 0, clipPath: 'inset(0 0 0 100%)' },
  },
}

export function RotatingWord({
  word,
  motion: motionStyle = 'slide',
  duration = 0.5,
  className = '',
}: RotatingWordProps) {
  const reduced = useReducedMotion()
  const variants = MOTION_VARIANTS[motionStyle]

  if (reduced) {
    return <span className={`inline-block ${className}`}>{word}</span>
  }

  return (
    <motion.span
      className={`relative inline-grid align-baseline -mx-[0.06em] ${className}`}
      style={{ verticalAlign: 'baseline' }}
      layout
      transition={{ layout: { duration: duration * 0.9, ease: [0.22, 1, 0.36, 1] } }}
    >
      {/* Padding expands the box so script swashes aren't clipped by clip-path */}
      <span
        className="invisible col-start-1 row-start-1 whitespace-nowrap px-[0.16em] py-[0.14em]"
        aria-hidden="true"
      >
        {word}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          className="col-start-1 row-start-1 inline-block whitespace-nowrap px-[0.16em] py-[0.14em]"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

interface UsePhraseCycleOptions {
  length: number
  /** How long each full pairing stays visible before advancing */
  intervalMs?: number
  enabled?: boolean
}

/** Cycles through every phrase index in order, looping forever. */
export function usePhraseCycle({
  length,
  intervalMs = 3200,
  enabled = true,
}: UsePhraseCycleOptions) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!enabled || length <= 1) return

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [enabled, intervalMs, length])

  return index
}
