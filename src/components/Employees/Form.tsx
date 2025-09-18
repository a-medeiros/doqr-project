'use client'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { type Employee } from '@/schemas/employee'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type FormProps = {
  handleSubmit: () => void
  register: UseFormRegister<Employee>
  errors: FieldErrors<Employee>
  isEditMode?: boolean
  employeeId?: number
  employeeStatus?: boolean
}

const Form = ({
  handleSubmit,
  register,
  errors,
  isEditMode = false,
  employeeId,
  employeeStatus,
}: FormProps) => {
  const router = useRouter()

  const handleDelete = async () => {
    if (!employeeId) return

    const response = await fetch(
      `https://api-testefrontend.qforms.com.br/employees/${employeeId}`,
      {
        method: 'DELETE',
      },
    )

    if (response.ok) {
      toast.success('Funcionário deletado com sucesso')
      router.push('/')
    } else {
      toast.error('Erro ao deletar funcionário')
    }
  }

  const inputClasses = cn(
    'w-full px-3 py-2 border border-soft-gray rounded-sm',
    'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
    'placeholder-gray-400 text-base',
    'disabled:bg-gray-50 disabled:text-gray-500',
  )

  const selectClasses = cn(
    'w-full px-3 py-2 border border-soft-gray rounded-sm',
    'focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent',
    'text-base bg-white',
    'appearance-none cursor-pointer',
    'pr-8',
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-cy="employee-form">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-base font-medium text-black">
            Nome
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Nome"
            className={inputClasses}
            data-cy="name-input"
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-base font-medium text-black">
            E-mail
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="e-mail"
            className={inputClasses}
            data-cy="email-input"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="cpf" className="block text-base font-medium text-black">
            CPF
          </label>
          <input
            {...register('cpf')}
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            className={inputClasses}
            data-cy="cpf-input"
          />
          {errors.cpf && <p className="text-sm text-red-600">{errors.cpf.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-base font-medium text-black">
            Celular
          </label>
          <input
            {...register('phone')}
            type="text"
            id="phone"
            placeholder="(99) 99999-9999"
            className={inputClasses}
            data-cy="phone-input"
          />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="dateOfBith" className="block text-base font-medium text-black">
            Data de Nascimento
          </label>
          <input
            {...register('dateOfBith')}
            type="date"
            id="dateOfBith"
            placeholder="00/00/0000"
            className={inputClasses}
            data-cy="date-of-birth-input"
          />
          {errors.dateOfBith && <p className="text-sm text-red-600">{errors.dateOfBith.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="typeOfHiring" className="block text-base font-medium text-black">
            Tipo de Contratação
          </label>
          <div className="relative">
            <select
              {...register('typeOfHiring')}
              id="typeOfHiring"
              className={selectClasses}
              data-cy="type-of-hiring-select"
            >
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
          <label htmlFor="status" className="block text-base font-medium text-black">
            Status
          </label>
          <div className="relative">
            <select
              {...register('status', {
                setValueAs: (value: string) => value === 'true',
              })}
              id="status"
              className={selectClasses}
              defaultValue={String(employeeStatus)}
              data-cy="status-select"
            >
              <option value="true">Ativo</option>
              <option value="false">Inativo</option>
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

      <div className="flex pt-2 gap-4">
        {isEditMode ? (
          <>
            <Button
              type="button"
              onClick={handleDelete}
              className="bg-delete-button hover:bg-red-600 
                text-white px-4 py-2 rounded-md font-bold cursor-pointer"
              data-cy="delete-button"
            >
              Excluir
            </Button>
            <Button
              type="submit"
              className="bg-save-button hover:bg-violet-700 
                text-white px-4 py-2 rounded-md font-bold cursor-pointer"
              data-cy="save-button"
            >
              Salvar
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            className="bg-save-button hover:bg-violet-700 
              text-white px-4 py-2 rounded-md font-bold cursor-pointer"
            data-cy="create-button"
          >
            Cadastrar
          </Button>
        )}
      </div>
    </form>
  )
}

export default Form
