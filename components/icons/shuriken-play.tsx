'use client'

import { cn } from '@/lib/utils'

interface ShurikenPlayIconProps {
  className?: string
  size?: number
}

export function ShurikenPlayIcon({ className, size = 24 }: ShurikenPlayIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('', className)}
    >
      {/* Minimalist tri-pointed shuriken/play hybrid */}
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M10 8.5L16 12L10 15.5V8.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TriStarIcon({ className, size = 16 }: ShurikenPlayIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={cn('', className)}
    >
      <path
        d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
        fill="currentColor"
      />
    </svg>
  )
}
