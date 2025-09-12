import EmployeesList from '@/components/Employees/List'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen px-[130px] pt-8 gap-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-black">Controle de Funcionários</h1>
        <p className="text-xl font-bold text-[#0B0B0C]">Empresa DoQR Tecnologia</p>
      </div>

      <EmployeesList />
    </div>
  )
}
