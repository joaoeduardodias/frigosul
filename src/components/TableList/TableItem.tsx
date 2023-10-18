import logoImg from '@/assets/whats.svg'
import { formatNumberPhone } from '@/utils/formatNumberPhone'
import Image from 'next/image'

interface TableItemProps {
  statusSale: 'Success' | 'Progress' | 'Cancel'
  name: string
  phone: string
}

export function TableItem({ statusSale, name, phone }: TableItemProps) {
  const phoneFormatted = formatNumberPhone(phone)

  return (
    <tr className="h-10 border-y">
      <td className="px-4">
        <span className="whitespace-nowrap text-zinc-900">{name}</span>
      </td>
      <td className="px-4">
        <span className="text-sm text-zinc-800">{phoneFormatted}</span>
      </td>
      <td className="px-4">
        <div
          className={`mx-auto flex w-32 items-center justify-center rounded-md  p-0.5 ${
            statusSale === 'Progress'
              ? ' bg-yellow-200'
              : statusSale === 'Cancel'
              ? ' bg-red-200'
              : statusSale === 'Success' && ' bg-green-200/80'
          }`}
        >
          {statusSale === 'Progress' ? (
            <span className="text-sm text-yellow-900">Em Andamento</span>
          ) : statusSale === 'Cancel' ? (
            <span className="text-sm text-red-700">Cancelada</span>
          ) : (
            statusSale === 'Success' && (
              <span className="text-sm text-green-950">Concluída</span>
            )
          )}
        </div>
      </td>
      <td>
        <button className="mx-auto flex items-center justify-center rounded-md bg-green-200 px-2  py-0.5 text-sm  transition-all hover:border-green-800 hover:bg-green-400">
          Conversar
          <Image src={logoImg} alt="Logo do whatsapp" width={25} height={25} />
        </button>
      </td>
    </tr>
  )
}
