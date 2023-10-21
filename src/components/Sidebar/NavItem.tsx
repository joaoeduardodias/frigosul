'use client'

import { usePathname, useRouter } from 'next/navigation'
interface NavItemProps {
  address: string
  title: string
  onClosedSideBar: () => void
}

export function NavItem({ address, title, onClosedSideBar }: NavItemProps) {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <div
      className={`cursor-pointer text-lg font-medium text-zinc-800 transition-all hover:text-red-500  lg:w-full lg:text-sm ${
        address === pathName
          ? ' lg:border-r-2 lg:border-red-500 lg:text-red-500'
          : 'text-zinc-800'
      }`}
      onClick={() => {
        onClosedSideBar()
        router.push(address)
      }}
    >
      <span>{title}</span>
    </div>
  )
}
