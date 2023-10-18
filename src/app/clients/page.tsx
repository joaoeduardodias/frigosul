import { TableList } from '@/components/TableList'
import { TabsWeek } from '@/components/TabsWeek'

export default function Clients() {
  return (
    <main className="px-4">
      <TabsWeek />

      <TableList />
    </main>
  )
}
