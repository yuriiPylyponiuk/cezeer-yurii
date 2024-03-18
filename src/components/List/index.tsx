'use client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Input } from '@/components/ui/input'
import { addItem } from '@/lib/feature/list/listSlice'
import { RootState } from '@/lib/store'

import { ListItem } from '../ui/listItem'

export const List = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { list } = useSelector((state: RootState) => state.main)
  const [searchList, setSearchList] = useState(list)
  const [searchQuery, setSeatchQuery] = useState('')

  const addToCart = (id: number, count: number) => {
    const [obj] = list.filter((item) => item.id === id)

    dispatch(addItem({ ...obj, count: count }))
  }

  const navigateTo = (id: number) => router.push(`item/${id}`)

  useEffect(() => {
    const arr = list.filter((item) => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    arr.length || searchQuery ? setSearchList(arr) : setSearchList(list)
  }, [searchQuery])

  return (
    <>
      <Input
        value={searchQuery}
        placeholder="Search"
        className="border-primary border-[2px]"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSeatchQuery(e.target.value)}
      />

      {searchList.map((item) => (
        <ListItem key={item.id} navigateTo={navigateTo} addToCart={addToCart} item={item} />
      ))}
    </>
  )
}
