import logoImg from '@/assets/whats.svg'
import { CircleDollarSign, LineChart, Plus, Users2 } from 'lucide-react'
import Image from 'next/image'
import { GraphicBar } from '../components/GraphicBar'

export default function Home() {
  return (
    <>
      <section className="ml-4 mt-4 flex items-center space-x-4">
        <div className="min-w-[15rem] space-y-4 rounded-md border border-slate-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <strong className="text-xs font-normal">Valor total</strong>
            <CircleDollarSign className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="flex items-center  text-lg font-semibold ">
            R$: 180.000,00
          </p>
        </div>
        <div className="min-w-[15rem] space-y-4 rounded-md border border-slate-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <strong className="text-xs font-normal">Clientes Atendidos</strong>
            <Users2 className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="flex items-center  text-lg font-semibold ">
            <Plus /> 200
          </p>
        </div>
        <div className="min-w-[15rem] space-y-4 rounded-md border border-slate-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <strong className="text-xs font-normal">Vendas Realizadas</strong>
            <LineChart className="h-4 w-4 text-zinc-500" />
          </div>
          <p className="flex items-center  text-lg font-semibold ">
            <Plus /> 150
          </p>
        </div>
      </section>
      <main className="mt-8 grid grid-cols-2 gap-8 px-4">
        <div className="rounded-md border p-4 ">
          <p className="ml-4 text-sm">Vendas por mês</p>
          <GraphicBar />
        </div>
        <div className="rounded-md border p-4">
          <p className="ml-4 text-sm">Novos clientes</p>
          <ul className="mt-4 space-y-4 ">
            <li className="flex justify-between px-4 ">
              <div className="flex flex-col">
                <strong className="">João Dias</strong>
                <span className="text-xs text-zinc-700">(67) 99890-8771</span>
              </div>
              <button className="rounded-md bg-transparent  transition-all hover:border  hover:border-green-600 ">
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li className="flex justify-between px-4 ">
              <div className="flex flex-col">
                <strong className="">João Dias</strong>
                <span className="text-xs text-zinc-700">(67) 99890-8771</span>
              </div>
              <button className="rounded-md bg-transparent  transition-all hover:border  hover:border-green-600 ">
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li className="flex justify-between px-4 ">
              <div className="flex flex-col">
                <strong className="">João Dias</strong>
                <span className="text-xs text-zinc-700">(67) 99890-8771</span>
              </div>
              <button className="rounded-md bg-transparent  transition-all hover:border  hover:border-green-600 ">
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li className="flex justify-between px-4 ">
              <div className="flex flex-col">
                <strong className="">João Dias</strong>
                <span className="text-xs text-zinc-700">(67) 99890-8771</span>
              </div>
              <button className="rounded-md bg-transparent  transition-all hover:border  hover:border-green-600 ">
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  width={30}
                  height={30}
                />
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
