'use client'
import { Trash } from 'lucide-react'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { useRouter } from 'next/navigation'

type DeleteEmployeeButtonProps = {
  employeeId: number
}

const DeleteEmployeeButton = ({ employeeId }: DeleteEmployeeButtonProps) => {
  const router = useRouter()

  const handleDelete = async (id: number) => {
    const response = await fetch(`https://api-testefrontend.qforms.com.br/employees/${id}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      toast.success('Funcionário deletado com sucesso')
      router.push('/')
    } else {
      toast.error('Erro ao deletar funcionário')
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 cursor-pointer"
        onClick={() => {
          handleDelete(employeeId)
        }}
      >
        <Trash className="text-graphite" width={16} height={18} />
      </Button>
    </>
  )
}

export default DeleteEmployeeButton
