'use client'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TableItem } from './TableItem'
export function TableList() {
  return (
    <ScrollArea.Root
      className="mb-4 h-72 overflow-auto rounded-md border shadow-sm"
      type="scroll"
    >
      <table className="w-full table-fixed border-collapse ">
        <ScrollArea.Viewport className="h-full w-full overflow-y-scroll">
          <thead className="border-b">
            <tr className=" text-left">
              <th className=" px-4">Nome</th>
              <th className="px-4">Número</th>
              <th className="px-4 text-center">Status da venda</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Progress"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Cancel"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Progress"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Cancel"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Progress"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Cancel"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Progress"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Cancel"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Progress"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Cancel"
            />
          </tbody>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 touch-none  select-none  flex-col bg-zinc-400 p-1 "
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-900 " />
        </ScrollArea.Scrollbar>
      </table>
    </ScrollArea.Root>
  )
}
