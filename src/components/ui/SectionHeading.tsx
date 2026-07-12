interface SectionHeadingProps {
  title: string
  subtitle?: string
  accent?: string
  align?: 'left' | 'center'
  id?: string
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  accent,
  align = 'center',
  id,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-10 md:mb-14 max-w-2xl ${alignClass} ${className}`}>
      {accent && (
        <p className="font-accent text-3xl md:text-4xl text-mauve mb-2">{accent}</p>
      )}
      <h2 id={id} className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-warm-gray text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </div>
  )
}
