import { useReducedMotion } from '../../hooks/useReducedMotion'

interface GoldParticlesProps {
  count?: number
  className?: string
}

export function GoldParticles({ count = 12, className = '' }: GoldParticlesProps) {
  const reduced = useReducedMotion()

  if (reduced) return null

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${10 + (i * 7) % 80}%`,
    top: `${15 + (i * 11) % 70}%`,
    delay: `${i * 0.5}s`,
    size: 2 + (i % 3),
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold/40 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: `${4 + (p.id % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}
