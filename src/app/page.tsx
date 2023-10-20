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
          <ul className="mt-2 divide-y rounded-md border">
            <li className="flex items-center justify-between   px-2 py-2">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                <strong className="whitespace-nowrap  text-zinc-900">
                  João Dias
                </strong>
                <span className="text-xs text-zinc-700 lg:text-sm ">
                  (67) 99890-8771
                </span>
              </div>
              <button className="flex items-center justify-center rounded-md bg-green-200 px-2  py-0.5 text-sm  transition-all hover:border-green-800 hover:bg-green-400">
                Conversar
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  className="h-6 w-6"
                  width="0"
                  height="0"
                />
              </button>
            </li>
            <li className="flex items-center justify-between   px-2 py-2">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                <strong className="whitespace-nowrap  text-zinc-900">
                  João Dias
                </strong>
                <span className="text-xs text-zinc-700 lg:text-sm ">
                  (67) 99890-8771
                </span>
              </div>
              <button className="flex items-center justify-center rounded-md bg-green-200 px-2  py-0.5 text-sm  transition-all hover:border-green-800 hover:bg-green-400">
                Conversar
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  className="h-6 w-6"
                  width="0"
                  height="0"
                />
              </button>
            </li>
            <li className="flex items-center justify-between   px-2 py-2">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
                <strong className="whitespace-nowrap  text-zinc-900">
                  João Dias
                </strong>
                <span className="text-xs text-zinc-700 lg:text-sm ">
                  (67) 99890-8771
                </span>
              </div>
              <button className="flex items-center justify-center rounded-md bg-green-200 px-2  py-0.5 text-sm  transition-all hover:border-green-800 hover:bg-green-400">
                Conversar
                <Image
                  src={logoImg}
                  alt="Logo do whatsapp"
                  className="h-6 w-6"
                  width="0"
                  height="0"
                />
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
