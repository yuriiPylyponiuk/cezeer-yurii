'use client'
import { RootState } from '@/lib/store'
import { LucideShoppingCart } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch } from '../ui/switch'

export const Header = () => {
  const { cart } = useSelector((state: RootState) => state.main)

  const [isChecked, setChecked] = useState(true)
  const { setTheme } = useTheme()

  const changeMode = () => {
    isChecked ? setTheme('light') : setTheme('dark')
    setChecked((prev) => !prev)
  }

  return (
    <div className="flex justify-between items-center mx-16 my-8 py-2 border-b-2 border-primary">
      <div className="logo">
        <h1 className="text-primary text-[30px] font-bold">
          <Link href={'/'}>CEEZER</Link>
        </h1>
      </div>
      <div className="flex items-center card">
        <Switch className="mr-10" id="airplane-mode" checked={isChecked} onCheckedChange={changeMode} />
        <Link href={'/card'} className="relative">
          <LucideShoppingCart size={40} />
          {cart.length ? <span className="w-3 h-3 absolute top-[-5px] right-[-5px] rounded-full bg-red-600" /> : null}
        </Link>
      </div>
    </div>
  )
}
