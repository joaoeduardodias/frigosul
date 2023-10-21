import { ModalAddClient } from '@/components/ModalAddClient'
import { TableList } from '@/components/TableList'
import { TabsWeek } from '@/components/TabsWeek'

export default function Clients() {
  return (
    <main className="mt-16 h-[calc(100vh-4rem)] w-screen max-w-[90rem] px-4 lg:mt-0 lg:h-[calc(100vh-10rem)] lg:w-full lg:px-8 xl:mx-auto">
      <TabsWeek />

      <TableList />

      <div className="flex w-full items-center">
        <ModalAddClient />
      </div>
    </main>
  )
}
