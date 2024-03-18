import { CardType } from '@/lib/feature/list/listSlice'

import Image from 'next/image'
import React, { FC } from 'react'
import { Controls } from '../Controls'

interface CartItemPropsType {
  cartItem: CardType
  navigateTo: (id: number) => void
  deleteCart: (id: number, _count: number) => void
  changeStateCount: (id: number, count: number) => void
}

export const CartItem: FC<CartItemPropsType> = ({ cartItem, navigateTo, deleteCart, changeStateCount }) => {
  return (
    <div className="my-5 border-primary border-2 rounded-md items-center p-10 flex flex-row" key={cartItem.id}>
      <Image
        onClick={() => navigateTo(cartItem.id)}
        src={cartItem.image}
        className="cursor-pointer w-[192px] h-[144px]"
        width={100}
        height={100}
        alt={''}
      />
      <div className="ml-10 w-[100%]">
        <p onClick={() => navigateTo(cartItem.id)} className="cursor-pointer text-[20px] font-semibold mb-3">
          {cartItem.name}
        </p>

        <div className="flex flex-row justify-between mt-5">
          <p>Count: {cartItem.count}</p>
          <p>Price: {cartItem.price_per_ton}$</p>
          <p>Total Item Price: {cartItem.count * cartItem.price_per_ton}$</p>
        </div>
        <Controls
          id={cartItem.id}
          cartCount={cartItem.count}
          userAction={deleteCart}
          title="Delete"
          type="cart"
          changeStateCount={changeStateCount}
        />
      </div>
    </div>
  )
}
