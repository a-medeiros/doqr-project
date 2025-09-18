import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CreateEmployee from '@/components/Employees/CreateEmployee'

const NewEmployeePage = () => {
  return (
    <div className="md:px-[130px] px-4 pt-8 pb-8 gap-16">
      <div className="flex mb-4">
        <Link href="/" className="flex items-center gap-2 w-[70px]">
          <ArrowLeft size={14} />
          Voltar
        </Link>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Cadastrar Funcionário</h1>
        <p className="text-xl font-bold text-graphite">Empresa DoQR Tecnologia</p>
      </div>

      <CreateEmployee />
    </div>
  )
}

export default NewEmployeePage
