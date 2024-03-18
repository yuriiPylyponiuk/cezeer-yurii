'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ListItemProp, addItem } from '@/lib/feature/list/listSlice'
import { RootState } from '@/lib/store'

import { Controls } from '../Controls'
import { UnitInfoPropType } from './type'

export const UnitInfo: FC<UnitInfoPropType> = ({ id }) => {
  const { list, sdgsGoals } = useSelector((state: RootState) => state.main)
  const item = list.find((item) => item.id == id) || ({} as ListItemProp)
  const dispatch = useDispatch()
  const router = useRouter()

  const addToCart = (id: number, count: number) => {
    dispatch(addItem({ ...item, count, id }))
  }

  return (
    <>
      {item && item.image ? (
        <div className="my-5 border-primary border-2 rounded-md p-10 flex flex-row">
          <Image src={item.image} className="mt-10 w-[192px] h-[144px]" width={100} height={100} alt={''} />
          <div className="ml-10">
            <p className="text-[20px] font-semibold mb-3">{item.name}</p>
            <p>{item.description}</p>
            {item.sdgs.length ? (
              <div className="flex flex-col justify-between mt-5 no-scrollbar">
                <p className="text-[22px]">Sustainable Development Goals:</p>
                <div className="flex mt-2 w-[100%] overflow-scroll no-scrollbar">
                  {item.sdgs.map((sdgs) => (
                    <Image
                      key={sdgs}
                      src={sdgsGoals[sdgs - 1].img}
                      className="cursor-pointer w-[100px] h-[100px] mr-5"
                      width={100}
                      height={100}
                      alt={''}
                      onClick={() => router.push(sdgsGoals[sdgs - 1].url)}
                    />
                  ))}
                </div>
              </div>
            ) : null}
            <div className="flex flex-row justify-between mt-5">
              <p>Lacation: {item.country}</p>
              <p>Supplier Name: {item.supplier_name}</p>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <p>Earliest Delivery: {item.earliest_delivery}</p>
              <p>Distribution Weight: {item.distribution_weight} t</p>
            </div>
            <div className="flex flex-row justify-between mt-5">
              <p>Offered Volume: {item.offered_volume_in_tons} t</p>
              <p>Price: {item.price_per_ton}$</p>
            </div>
            <Controls id={item.id} userAction={addToCart} title="Buy" />
          </div>
        </div>
      ) : null}
    </>
  )
}
