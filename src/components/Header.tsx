'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  return (
    <header
      className={`${
        pathName === '/clients' ? 'hidden' : 'flex'
      } mt-16 items-center justify-between border-b lg:mt-0 lg:flex lg:px-16 lg:py-5`}
    >
      <div className="flex flex-col">
        <strong className="text-xl font-semibold text-slate-800">
          Seja Bem Vindo,João
        </strong>
        <span className="text-sm  text-zinc-800/80">
          Organize de forma simples a gestão de seus clientes!
        </span>
      </div>
      <Image
        src="https://github.com/joaoeduardodias.png"
        alt="Profile"
        className="hidden w-12 rounded-full object-cover lg:flex"
        width="0"
        height="0"
        sizes="100vw"
      />
    </header>
  )
}
