'use client'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TableItem } from './TableItem'
export function TableList() {
  return (
    <ScrollArea.Root
      className="mb-4 h-2/3  overflow-hidden rounded-md border shadow-sm "
      type="scroll"
    >
      <ScrollArea.Viewport className="h-full w-full overflow-scroll">
        <table className="w-[40rem] table-fixed border-collapse md:w-full">
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
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
            />
            <TableItem
              name="João Dias"
              phone="67998908771"
              statusSale="Success"
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
        </table>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="vertical"
        className="flex w-2 touch-none  select-none  flex-col bg-zinc-300 p-0.5"
      >
        <ScrollArea.Thumb className="relative  rounded-lg bg-zinc-700 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="flex w-full touch-none  select-none  flex-col bg-zinc-300 p-0.5"
      >
        <ScrollArea.Thumb className="relative h-full   min-h-[4px] w-full min-w-[5px]  rounded-lg bg-zinc-700 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
