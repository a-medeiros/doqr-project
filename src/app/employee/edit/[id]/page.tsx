import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Employee } from '@/schemas/employee'
import { notFound } from 'next/navigation'
import UpdateEmployee from '@/components/Employees/UpdateEmployee'

type EditEmployeePageProps = {
  params: Promise<{ id: string }>
}

const EditEmployeePage = async ({ params }: EditEmployeePageProps) => {
  const { id } = await params

  let employee: Employee | null = null

  try {
    const response = await fetch(`https://api-testefrontend.qforms.com.br/employees/${id}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    if (!response.ok) {
      notFound()
    }

    employee = await response.json()
  } catch {
    notFound()
  }

  if (!employee) {
    notFound()
  }

  return (
    <div className="md:px-[130px] px-4 pt-8 pb-8 gap-16">
      <div className="flex mb-4">
        <Link href="/" className="flex items-center gap-2 w-[70px]">
          <ArrowLeft size={14} />
          Voltar
        </Link>
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Editar Funcionário</h1>
        <p className="text-xl font-bold text-[#0B0B0C]">Empresa DoQR Tecnologia</p>
      </div>

      <UpdateEmployee employee={employee} />
    </div>
  )
}

export default EditEmployeePage
