import { Employee as EmployeeSchema } from '@/schemas/employee'
import Employee from './Employee'
import TableHeaderItem from './TableHeaderItem'

type EmployeesListProps = {
  searchParams: { name?: string }
}

const EmployeesList = async ({ searchParams }: EmployeesListProps) => {
  const name = searchParams?.name

  const apiUrl = name
    ? `https://api-testefrontend.qforms.com.br/employees?name=${name}`
    : 'https://api-testefrontend.qforms.com.br/employees'

  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/json' },
  })

  if (response.ok && response.status === 204) {
    return <div className="p-6 text-center text-black">Nenhum funcionário encontrado</div>
  }

  const employees: EmployeeSchema[] = await response.json()

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-1 border-soft-gray">
            <TableHeaderItem />
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map(employee => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeesList
