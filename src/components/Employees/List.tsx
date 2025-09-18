import { Employee as EmployeeSchema } from '@/schemas/employee'
import Employee from './Employee'
import TableHeaderItem from './TableHeaderItem'

type EmployeesListProps = {
  searchParams: { name?: string }
}

const EmployeesList = async ({ searchParams }: EmployeesListProps) => {
  const name = searchParams?.name
  const apiBaseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/employees`

  if (!apiBaseUrl) {
    throw new Error('API_BASE_URL is not defined')
  }

  const apiUrl = name ? `${apiBaseUrl}?name=${encodeURIComponent(name)}` : apiBaseUrl

  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/json' },
  })

  if (response.ok && response.status === 204) {
    return (
      <div data-cy="empty-state" className="p-6 text-center text-black">
        Nenhum funcionário encontrado
      </div>
    )
  }

  const employees: EmployeeSchema[] = await response.json()

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table data-cy="employees-table" className="w-full">
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
