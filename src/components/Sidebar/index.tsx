'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import logoSulbeef from '../../assets/logo.png'
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
      className="8 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6  border-b bg-white  p-4 data-[state=open]:bottom-0 lg:relative lg:right-auto lg:w-40 lg:border-r lg:p-0 lg:data-[state=closed]:bottom-0"
    >
      <div className="flex  items-center justify-center px-2 lg:justify-between">
        <Image
          src={logoSulbeef}
          alt="Logo Sulbeef"
          className="w-[7rem] px-2 md:w-[10rem] lg:w-full lg:pt-4"
          width="0"
          height="0"
        />
        <Collapsible.Trigger
          asChild
          className="absolute right-4 top-6 md:right-5 md:top-9 lg:hidden"
        >
          <button>
            {open ? (
              <X className="h-6 w-6 md:h-8 md:w-8" />
            ) : (
              <Menu className="h-6 w-6 md:h-8 md:w-8" />
            )}
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1  flex-col items-center justify-center gap-6 data-[state=closed]:hidden  lg:mt-6  lg:items-start lg:justify-normal lg:pl-8 lg:data-[state=closed]:flex"
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
