'use client'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  return (
    <header
      className={`${
        pathName === '/clients' ? 'hidden' : 'flex'
      } mt-16  border-b px-4 lg:mt-0 lg:flex lg:py-5 lg:pl-8`}
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
