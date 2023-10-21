'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavItem } from './NavItem'
export function Sidebar() {
  const [open, setOpen] = useState<boolean>(false)

  function handleClosedSidebar() {
    setOpen(false)
  }

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b bg-white p-4 data-[state=open]:bottom-0 lg:relative lg:right-auto lg:w-40 lg:border-r lg:py-8 lg:pb-0 lg:pl-8  lg:pr-0 lg:data-[state=closed]:bottom-0"
    >
      <div className="flex items-center justify-between">
        <p className=" w-full text-center">Logo</p>
        <Collapsible.Trigger asChild className="lg:hidden">
          <button>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col items-center justify-center gap-6  data-[state=closed]:hidden  lg:mt-6 lg:items-start lg:justify-normal lg:data-[state=closed]:flex"
      >
        <NavItem
          address="/"
          title="Dashboard"
          onClosedSideBar={handleClosedSidebar}
        />
        <NavItem
          address="/clients"
          title="Clientes"
          onClosedSideBar={handleClosedSidebar}
        />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
