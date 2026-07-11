interface LotusMotifProps {
  className?: string
  size?: number
}

export function LotusMotif({ className = '', size = 48 }: LotusMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 38 C24 38 12 30 12 20 C12 14 17 10 24 14 C31 10 36 14 36 20 C36 30 24 38 24 38Z"
        stroke="#D6B57A"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 14 C20 8 14 8 14 16 C14 22 24 30 24 30 M24 14 C28 8 34 8 34 16 C34 22 24 30 24 30"
        stroke="#E9CFCB"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  )
}
