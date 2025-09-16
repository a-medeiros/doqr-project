'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { employeeSchema, type Employee } from '@/schemas/employee'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Form = () => {
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
    await fetch('https://api-testefrontend.qforms.com.br/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })

    reset()
  }

  const inputClasses = cn(
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
    'placeholder-gray-400 text-sm',
    'disabled:bg-gray-50 disabled:text-gray-500',
  )

  const selectClasses = cn(
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
    'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
    'text-sm bg-white',
    'appearance-none cursor-pointer',
    'pr-8',
  )

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              placeholder="Nome"
              className={inputClasses}
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="e-mail"
              className={inputClasses}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              {...register('cpf')}
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              className={inputClasses}
            />
            {errors.cpf && <p className="text-sm text-red-600">{errors.cpf.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Celular
            </label>
            <input
              {...register('phone')}
              type="text"
              id="phone"
              placeholder="(99) 99999-9999"
              className={inputClasses}
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="dateOfBith" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              {...register('dateOfBith')}
              type="date"
              id="dateOfBith"
              placeholder="00/00/0000"
              className={inputClasses}
            />
            {errors.dateOfBith && (
              <p className="text-sm text-red-600">{errors.dateOfBith.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="typeOfHiring" className="block text-sm font-medium text-gray-700">
              Tipo de Contratação
            </label>
            <div className="relative">
              <select {...register('typeOfHiring')} id="typeOfHiring" className={selectClasses}>
                <option value="">Selecione uma opção...</option>
                <option value="CLT">CLT</option>
                <option value="PJ">PJ</option>
              </select>
              <div
                className="absolute inset-y-0 right-0 flex 
                items-center pr-3 pointer-events-none"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.typeOfHiring && (
              <p className="text-sm text-red-600">{errors.typeOfHiring.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="relative">
              <select
                {...register('status', {
                  setValueAs: (value: string) => value === 'ativo',
                })}
                id="status"
                className={selectClasses}
              >
                <option value="">Selecione uma opção...</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
              <div
                className="absolute inset-y-0 right-0 flex 
                items-center pr-3 pointer-events-none"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.status && <p className="text-sm text-red-600">{errors.status.message}</p>}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 
            text-white px-8 py-2 rounded-md font-medium cursor-pointer"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
