import { ListItemProp } from '@/lib/feature/list/listSlice'
import Image from 'next/image'
import React, { FC } from 'react'
import { Controls } from '../Controls'

interface ListItemPropType {
  item: ListItemProp
  navigateTo: (id: number) => void
  addToCart: (id: number, count: number) => void
}

export const ListItem: FC<ListItemPropType> = ({ item, navigateTo, addToCart }) => (
  <div className="my-5 border-primary border-2 rounded-md items-center p-10 flex flex-row">
    <Image
      onClick={() => navigateTo(item.id)}
      src={item.image}
      className="cursor-pointer w-[192px] h-[144px]"
      width={100}
      height={100}
      alt={''}
    />
    <div className="ml-10">
      <p onClick={() => navigateTo(item.id)} className="cursor-pointer text-[20px] font-semibold mb-3">
        {item.name}
      </p>
      <p>{item.description}</p>
      <div className="flex flex-row justify-between mt-5">
        <p>Lacation: {item.country}</p>
        <p>Offered Volume: {item.offered_volume_in_tons} t</p>
        <p>Distribution Weight: {item.distribution_weight} t</p>
        <p>Price: {item.price_per_ton}$</p>
      </div>
      <Controls id={item.id} userAction={addToCart} title="Buy" />
    </div>
  </div>
)
