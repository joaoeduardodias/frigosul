import { ModalAddClient } from '@/components/ModalAddClient'
import { TableList } from '@/components/TableList'
import { TabsWeek } from '@/components/TabsWeek'

export default function Clients() {
  return (
    <main className="mt-20 w-screen  px-4 lg:mt-0">
      <TabsWeek />

      <TableList />

      <div className="flex w-full items-center">
        <ModalAddClient />
      </div>
    </main>
  )
}
