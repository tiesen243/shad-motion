'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface Item {
  id: string
  title: string
  content: React.ReactNode
}

const MotionChevronDown = motion.create(ChevronDown)

export const Accordion: React.FC<{
  type: 'single' | 'multiple'
  items: Item[]
  className?: string
}> = ({ type = 'single', items }) => {
  return (
    <AccordionPrimitive.Root type={type} collapsible>
      {items.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </AccordionPrimitive.Root>
  )
}

const AccordionItem: React.FC<{ item: Item }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AccordionPrimitive.Item value={item.id}>
      <AccordionPrimitive.Trigger
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
        className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline"
      >
        {item.title}
        <MotionChevronDown
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-muted-foreground h-4 w-4 shrink-0"
        />
      </AccordionPrimitive.Trigger>
      <AnimatePresence initial={false}>
        <AccordionPrimitive.Content className="overflow-hidden text-sm">
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{
                collapsed: { opacity: 0, y: -10 },
                open: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2, delay: 0.1, ease: 'easeOut' }}
              className="pt-0 pb-4"
            >
              {item.content}
            </motion.div>
          </motion.div>
        </AccordionPrimitive.Content>
      </AnimatePresence>
    </AccordionPrimitive.Item>
  )
}
