'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function TabsWeek() {
  const [currentTab, setCurrentTab] = useState('Segunda')

  return (
    <Tabs.Root defaultValue={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List aria-label="tabs week" className="ml-4 mt-5 flex gap-4">
        <TabItem day="Segunda" isSelected={currentTab === 'Segunda'} />
        <TabItem day="Terça" isSelected={currentTab === 'Terça'} />
        <TabItem day="Quarta" isSelected={currentTab === 'Quarta'} />
        <TabItem day="Quinta" isSelected={currentTab === 'Quinta'} />
        <TabItem day="Sexta" isSelected={currentTab === 'Sexta'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
