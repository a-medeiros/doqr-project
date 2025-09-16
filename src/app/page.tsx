import EmployeesList from '@/components/Employees/List'
import NewEmployee from '@/components/Employees/NewEmployee'

export default function Home() {
  return (
    <div className=" px-[130px] pt-8 pb-8 gap-16">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Controle de Funcionários</h1>
        <p className="text-xl font-bold text-[#0B0B0C]">Empresa DoQR Tecnologia</p>
      </div>

      <div className="mb-3">
        <NewEmployee />
      </div>

      <EmployeesList />
    </div>
  )
}
