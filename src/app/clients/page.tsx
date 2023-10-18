import { ModalAddClient } from '@/components/ModalAddClient'
import { TableList } from '@/components/TableList'
import { TabsWeek } from '@/components/TabsWeek'

export default function Clients() {
  return (
    <main className="px-4">
      <TabsWeek />

      <TableList />

      <div className="flex w-full items-center">
        <ModalAddClient />
      </div>
    </main>
  )
}
