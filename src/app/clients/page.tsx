import { ModalAddClient } from '@/components/ModalAddClient'
import { TableList } from '@/components/TableList'
import { TabsWeek } from '@/components/TabsWeek'

export default function Clients() {
  return (
    <main className="mt-16 h-[calc(100vh-4rem)] w-screen border-2 border-red-500 px-4 lg:mt-0 lg:h-screen">
      <TabsWeek />

      <TableList />

      <div className="flex w-full items-center">
        <ModalAddClient />
      </div>
    </main>
  )
}
