'use client'

import type { HTMLMotionProps } from 'motion/react'
import type { ImageProps } from 'next/image'
import * as React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
  isPressable?: boolean
  asChild?: boolean
}

const MotionCard = motion.create('div')

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ isPressable, className, ...props }, ref) => {
    return (
      <MotionCard
        ref={ref}
        {...(isPressable && {
          whileHover: { backgroundColor: 'var(--color-secondary)' },
          whileTap: { scale: 0.95 },
        })}
        className={cn(
          'bg-card text-card-foreground rounded-xl border shadow-sm',
          isPressable && 'cursor-pointer',
          className,
        )}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'

const CardImage = React.forwardRef<
  HTMLImageElement,
  ImageProps & {
    position?: 'top' | 'bottom'
  }
>(({ className, position = 'top', ...props }, ref) => (
  <Image
    ref={ref}
    className={cn(
      'w-full overflow-hidden',
      {
        'rounded-t-xl': position === 'top',
        'm-6 mt-0 w-[calc(100%-3rem)] rounded-md': position === 'bottom',
      },
      className,
    )}
    width={400}
    height={200}
    {...props}
  />
))
CardImage.displayName = 'CardImage'

export { Card, CardImage }
