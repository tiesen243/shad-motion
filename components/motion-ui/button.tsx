'use client'

import type { HTMLMotionProps } from 'motion/react'
import * as React from 'react'
import { motion } from 'motion/react'

import type { ButtonProps } from '@/components/ui/button'
import { Button as ShadcnButton } from '@/components/ui/button'

const MotionButton = motion.create(ShadcnButton)

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & HTMLMotionProps<'button'>
>((props, ref) => {
  return (
    <MotionButton
      ref={ref}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  )
})
Button.displayName = 'MotionButton'

export { Button }
