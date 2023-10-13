export function Sidebar() {
  return (
    <aside className="flex h-screen w-[180px] flex-col items-center border-r pt-6">
      <p className=" w-full text-center">Logo</p>
      <div className="mt-16 flex w-full flex-col items-start space-y-4 pl-6">
        <p className="cursor-pointer transition-all hover:text-red-600/90">
          Dashboard
        </p>
        <p className="cursor-pointer transition-all hover:text-red-600/90">
          Clientes
        </p>
      </div>
    </aside>
  )
}
