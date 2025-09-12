import React from 'react'
import { Employee as EmployeeType } from '@/types/employee.types'
import Employee from './Employee'
import TableHeaderItem from './TableHeaderItem'

const EmployeesList = async () => {
  const response = await fetch('https://api-testefrontend.qforms.com.br/employees')
  const employees: EmployeeType[] = await response.json()

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-1 border-[#CDCAD2]">
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
