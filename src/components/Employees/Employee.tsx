import { Employee as EmployeeSchema } from '@/schemas/employee'
import { Button } from '../ui/button'
import { Edit, Trash2 } from 'lucide-react'
import TableItem from './TableItem'

type EmployeeProps = {
  employee: EmployeeSchema
}

const Employee = ({ employee }: EmployeeProps) => {
  const getStatusBadge = (status: EmployeeSchema['status']) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
    if (status === true) {
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Ativo</span>
    } else if (status === false) {
      return <span className={`${baseClasses} bg-red-100 text-red-800`}>Inativo</span>
    } else {
      return ''
    }
  }

  const getTypeOfHiring = (type: EmployeeSchema['typeOfHiring']) => {
    const typeOfHiring = type === 'CLT' ? 'CLT' : type === 'PJ' ? 'PJ' : 'Não informado'
    return typeOfHiring
  }

  const getDateOfBirth = (date: EmployeeSchema['dateOfBith']) => {
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
        {getStatusBadge(employee.status)}
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
