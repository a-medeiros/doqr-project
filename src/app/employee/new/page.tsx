import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Form from '@/components/Employees/Form'

const NewEmployeePage = () => {
  return (
    <div className="px-[130px] pt-8 pb-8 gap-16">
      <div className="flex mb-4">
        <Link href="/" className="flex items-center gap-2 w-[70px]">
          <ArrowLeft size={14} />
          Voltar
        </Link>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Cadastrar Funcionário</h1>
        <p className="text-xl font-bold text-[#0B0B0C]">Empresa DoQR Tecnologia</p>
      </div>

      <Form />
    </div>
  )
}

export default NewEmployeePage
