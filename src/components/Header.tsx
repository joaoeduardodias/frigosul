'use client'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  return (
    <header
      className={`${
        pathName === '/clients' ? 'hidden lg:flex' : 'flex'
      } mx-auto mt-20 flex justify-center border-b px-4 pb-2 text-center md:mt-28 lg:mt-0 lg:py-5 lg:pl-8 lg:text-left`}
    >
      <div className="flex flex-col">
        <strong className="text-xl font-semibold text-slate-800">
          Seja Bem Vindo,João
        </strong>
        <span className="text-sm  text-zinc-800/80">
          Organize de forma simples a gestão de seus clientes!
        </span>
      </div>
    </header>
  )
}
