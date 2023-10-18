'use client'

import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
interface NavItemProps {
  address: string
  title: string
}

export function NavItem({ address, title }: NavItemProps) {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <motion.div
      layoutId="activeNav"
      className={`w-full cursor-pointer text-sm font-medium  transition-all hover:text-red-500 ${
        address === pathName
          ? 'border-r-2 border-red-500 text-red-500'
          : 'text-zinc-800'
      }`}
      onClick={() => router.push(address)}
    >
      <span>{title}</span>
    </motion.div>
  )
}
