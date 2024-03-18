import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { CounterPropsType } from './type'

export const Counter: FC<CounterPropsType> = ({ increment, decrement, counter }) => {
  return (
    <div className="flex items-center mr-7">
      <Button variant="default" onClick={decrement}>
        -
      </Button>
      <p className="text-[20px] mx-5">{counter}</p>
      <Button variant="default" onClick={increment}>
        +
      </Button>
    </div>
  )
}
