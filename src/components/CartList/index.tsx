'use client'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { deleteAll, deleteItem, updateItem } from '@/lib/feature/list/listSlice'
import { RootState } from '@/lib/store'

import { Modal } from '../Dialog'
import { CartItem } from '../ui/cartItem'

export const CartList = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const cart = useSelector((state: RootState) => state.main.cart)
  const [show, setShow] = useState(false)

  const navigateTo = (id: number) => router.push(`item/${id}`)

  const confirmTransaction = () => {
    dispatch(deleteAll())
    setShow(false)
  }

  const toggleModal = () => {
    setShow((prev) => !prev)
  }

  const { totalCount, totalPrice, averagePrice } = useMemo(() => {
    const totalCount = cart.reduce((acc, item) => acc + item.count, 0)
    const totalPrice = cart.reduce((acc, item) => acc + item.count * item.price_per_ton, 0)
    const averagePrice = totalCount ? totalPrice / totalCount : 0
    return { totalCount, totalPrice, averagePrice }
  }, [cart])

  const deleteCart = (id: number, count: number) => {
    dispatch(deleteItem({ id, count }))
  }

  const changeStateCount = (id: number, count: number) => {
    const [obj] = cart.filter((item) => item.id === id)

    dispatch(updateItem({ ...obj, count: count }))
  }

  return (
    <>
      {cart.length ? (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              deleteCart={deleteCart}
              changeStateCount={changeStateCount}
              navigateTo={navigateTo}
            />
          ))}
          <div className="flex justify-between align-bottom">
            <div>
              <p>Total Count: {totalCount}</p>
              <p>Avarage Price: {Math.round(averagePrice)}$</p>
              <p>Total Price: {totalPrice}$</p>
            </div>
            <Button onClick={toggleModal}>Confirm transaction</Button>
          </div>
        </>
      ) : (
        <p className="text-[30px] text-center mt-20">Your cart is empty</p>
      )}
      <Modal open={show} confirmFunc={confirmTransaction} toggleModal={toggleModal} />
    </>
  )
}
