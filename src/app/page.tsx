import EmployeesList from '@/components/Employees/List'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function Home() {
  return (
    <div className=" px-[130px] pt-8 pb-8 gap-16">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Controle de Funcionários</h1>
        <p className="text-xl font-bold text-[#0B0B0C]">Empresa DoQR Tecnologia</p>
      </div>

      <div className="mb-3">
        <Button className="gap-[2.5px] cursor-pointer">
          <Plus className="w-4 h-4" size={14} />
          Novo Funcionário
        </Button>
      </div>
      <EmployeesList />
    </div>
  )
}
