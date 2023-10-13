import { CircleDollarSign, LineChart, Plus, Users2 } from 'lucide-react'
import { Header } from './components/Header'

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
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
    </div>
  )
}
