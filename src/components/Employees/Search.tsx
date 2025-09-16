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
    <div className="relative w-[383px] max-w-md">
      <div className="relative">
        <Input
          type="text"
          value={name}
          placeholder={'Buscar Funcionário...'}
          className="w-[383px] h-[35px]"
          onChange={e => {
            setName(e.target.value)
          }}
        />
        {searchName && (
          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-1 top-1/2 transform -translate-y-1/2 
            text-gray-400 hover:text-gray-600`}
            aria-label="Buscar"
            onClick={() => {
              setName('')
              router.push(`/`)
            }}
          >
            <CloseIcon className="w-5 h-5" />
          </Button>
        )}
        {!searchName && (
          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-1 top-1/2 transform -translate-y-1/2 
            text-gray-400 hover:text-gray-600`}
            aria-label="Buscar"
            onClick={() => {
              router.push(`?name=${name}`)
            }}
          >
            <SearchIcon className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Search
