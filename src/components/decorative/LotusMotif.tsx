interface LotusMotifProps {
  className?: string
  size?: number
}

export function LotusMotif({ className = '', size = 48 }: LotusMotifProps) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 56 48"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer left petals */}
      <path
        d="M28 42 C18 38 6 32 4 22 C2 14 10 12 18 18 C22 22 26 30 28 42Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M28 42 C38 38 50 32 52 22 C54 14 46 12 38 18 C34 22 30 30 28 42Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Mid petals */}
      <path
        d="M28 40 C20 34 12 26 12 18 C12 10 20 10 26 16 C27 20 28 28 28 40Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M28 40 C36 34 44 26 44 18 C44 10 36 10 30 16 C29 20 28 28 28 40Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Inner petals */}
      <path
        d="M28 38 C24 30 20 22 20 16 C20 10 24 8 28 14 C28 20 28 28 28 38Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M28 38 C32 30 36 22 36 16 C36 10 32 8 28 14 C28 20 28 28 28 38Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Center petal */}
      <path
        d="M28 40 C28 40 24 22 24 14 C24 8 28 4 28 4 C28 4 32 8 32 14 C32 22 28 40 28 40Z"
        stroke="#D6B57A"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
}
