import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

interface TabItemProps extends ComponentProps<'button'> {
  day: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta'
  isSelected?: boolean
}

export function TabItem({ day, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={day}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-red-500 data-[state=active]:text-red-500"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-red-400 group-focus-visible:ring-offset-4">
        {day}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-1 bg-red-600  lg:h-0.5"
        />
      )}
    </Tabs.Trigger>
  )
}
