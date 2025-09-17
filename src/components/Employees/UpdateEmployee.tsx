'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { employeeSchema, type Employee } from '@/schemas/employee'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import Form from './Form'
import { convertToDate } from '@/lib/convertToDate'

type UpdateEmployeeProps = {
  employee?: Employee
}

const getDefaultValues = (employee?: Employee) => ({
  name: employee?.name || '',
  email: employee?.email || '',
  cpf: employee?.cpf || '',
  phone: employee?.phone || '',
  dateOfBith: convertToDate(employee?.dateOfBith),
  typeOfHiring: employee?.typeOfHiring || undefined,
  status: employee?.status || undefined,
})

const UpdateEmployee = ({ employee }: UpdateEmployeeProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      ...getDefaultValues(employee),
    },
  })

  const onSubmit = async (data: Employee) => {
    const response = await fetch(
      `https://api-testefrontend.qforms.com.br/employees/${employee?.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    if (response.ok) {
      toast.success('Funcionário atualizado com sucesso')
    } else {
      toast.error('Erro ao atualizar funcionário')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5">
      <Toaster position="top-center" />
      <Form
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isEditMode={true}
        employeeId={employee?.id}
        employeeStatus={employee?.status}
      />
    </div>
  )
}

export default UpdateEmployee
