'use client'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const NewEmployee = () => {
  const router = useRouter()

  return (
    <Button className="gap-[2.5px] cursor-pointer" onClick={() => router.push('/employee/new')}>
      <Plus className="w-4 h-4" size={14} />
      Novo Funcionário
    </Button>
  )
}

export default NewEmployee
