import { Employee as EmployeeType } from '@/types/employee.types'
import { Button } from '../ui/button'
import { Edit, Trash2 } from 'lucide-react'
import TableItem from './TableItem'

type EmployeeProps = {
  employee: EmployeeType
}

const Employee = ({ employee }: EmployeeProps) => {
  const getStatusBadge = (status: 'Ativo' | 'Inativo') => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
    if (status === 'Ativo') {
      return `${baseClasses} bg-green-100 text-green-800`
    } else if (status === 'Inativo') {
      return `${baseClasses} bg-red-100 text-red-800`
    } else {
      return ''
    }
  }

  const getTypeOfHiring = (type: 'CLT' | 'PJ') => {
    const typeOfHiring = type === 'CLT' ? 'CLT' : type === 'PJ' ? 'PJ' : 'Não informado'
    return typeOfHiring
  }

  const getDateOfBirth = (date: string) => {
    const dateOfBirth = new Date(date)
    return dateOfBirth.toLocaleDateString('pt-BR')
  }

  return (
    <tr key={employee.id} className="hover:bg-gray-50">
      <TableItem text={employee.name} />
      <TableItem text={employee.email} />
      <TableItem text={employee.cpf} />
      <TableItem text={employee.phone} />
      <TableItem text={getDateOfBirth(employee.dateOfBith)} />
      <TableItem text={getTypeOfHiring(employee.typeOfHiring)} />
      <td className="p-4 font-normal whitespace-nowrap text-sm">
        <span className={getStatusBadge(employee.status)}>{employee.status}</span>
      </td>
      <td className="p-4 font-normal whitespace-nowrap text-sm">
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-gray-100">
            <Edit className="h-4 w-4 text-gray-500" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default Employee
