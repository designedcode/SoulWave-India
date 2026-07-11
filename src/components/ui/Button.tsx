import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'ghost'
type ButtonSize = 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  external?: boolean
  ariaLabel?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold/90 shadow-md hover:shadow-lg border border-gold/20',
  secondary:
    'bg-transparent text-charcoal border-2 border-sage hover:bg-sage/20 hover:border-sage',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp/90 shadow-md',
  ghost:
    'bg-transparent text-charcoal hover:bg-blush/30',
}

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-12 px-6 py-3 text-sm',
  lg: 'min-h-14 px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
