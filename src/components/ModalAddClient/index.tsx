'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Phone, X } from 'lucide-react'
import * as Input from '../Input'
import { Select } from '../Select'
import { SelectItem } from '../Select/SelectItem'

export function ModalAddClient() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ml-auto rounded-sm bg-green-700 px-2 py-1 text-white">
          Adicionar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[21] bg-blue-950/30" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[22] flex w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-md bg-white p-4 shadow-md md:w-1/2">
          <div className="flex items-center justify-between">
            <Dialog.Title>Adicionar novo cliente</Dialog.Title>
            <Dialog.Close asChild>
              <button className="ml-auto focus:outline-none">
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>
          <form className="flex w-full flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="ml-1 text-sm font-medium text-zinc-800"
              >
                Nome
              </label>

              <Input.Root>
                <Input.Control id="name" placeholder="Digite o nome..." />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="ml-1 text-sm font-medium text-zinc-800"
              >
                Telefone
              </label>

              <Input.Root>
                <Input.Prefix>
                  <Phone className="h-4 w-4 text-zinc-500" />
                </Input.Prefix>
                <Input.Control id="phone" placeholder="Digite o telefone..." />
              </Input.Root>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="day"
                className="ml-1 text-sm font-medium text-zinc-800"
              >
                Dia de atendimento
              </label>
              <Select placeholder="Select a day">
                <SelectItem text="Segunda-Feira" value="seg" />
                <SelectItem text="Terça-Feira" value="ter" />
                <SelectItem text="Quarta-Feira" value="qua" />
                <SelectItem text="Quinta-Feira" value="qui" />
                <SelectItem text="Sexta-Feira" value="sex" />
              </Select>
            </div>
            <button
              type="submit"
              className="rounded-md bg-green-600 py-1 text-white transition-colors hover:bg-green-700"
            >
              Adicionar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
