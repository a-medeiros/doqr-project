import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-4 border-[#E5E3E9]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/header-icon.svg" alt="Logo" width={32} height={32} />
          <span className="text-base font-bold text-black">Teste Dqpr</span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          <span className="text-base text-black font-semibold">Seu Nome</span>
        </div>
      </div>
    </header>
  )
}

export default Header
