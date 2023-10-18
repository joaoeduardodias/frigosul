import Image from 'next/image'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-16 py-5">
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
        className=" w-12 rounded-full object-cover"
        width="0"
        height="0"
        sizes="100vw"
      />
    </header>
  )
}
