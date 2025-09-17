'use client'

import { Search as SearchIcon, X as CloseIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const Search = () => {
  const searchParams = useSearchParams()
  const searchName = searchParams.get('name')
  const router = useRouter()

  const [name, setName] = useState(searchName || '')

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-[383px] max-w-md">
        <div className="relative">
          <Input
            type="text"
            value={name}
            placeholder={'Buscar Funcionário...'}
            className="md:w-[383px] w-full h-[35px] pr-10"
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 
            h-7 w-7 text-gray-400 hover:text-gray-600"
            aria-label="Buscar"
            onClick={() => {
              router.push(`?name=${name}`)
            }}
          >
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {searchName && (
        <Button
          variant="destructive"
          size="sm"
          className="h-[35px] px-3"
          aria-label="Limpar busca"
          onClick={() => {
            setName('')
            router.push(`/`)
          }}
        >
          Limpar <CloseIcon className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  )
}

export default Search
