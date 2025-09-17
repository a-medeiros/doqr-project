'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { employeeSchema, type Employee } from '@/schemas/employee'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import Form from './Form'

const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Employee>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      dateOfBith: '',
      typeOfHiring: undefined,
      status: undefined,
    },
  })

  const onSubmit = async (data: Employee) => {
    const response = await fetch('https://api-testefrontend.qforms.com.br/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      toast.success('Funcionário cadastrado com sucesso')
    } else {
      toast.error('Erro ao cadastrar funcionário')
    }

    reset()
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <Toaster position="top-center" />
      <Form handleSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
    </div>
  )
}

export default CreateEmployee
