import React, { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Counter } from '../Counter'
import { ControlsPropsType } from './type'

export const Controls: FC<ControlsPropsType> = ({
  id,
  userAction,
  cartCount = 1,
  title = 'Buy',
  type,
  changeStateCount = () => {},
}) => {
  const [count, setCount] = useState(cartCount)

  useEffect(() => {
    if (type === 'cart') changeStateCount(id, count)
  }, [count])

  const increment = () => setCount((prev) => prev + 1)

  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="justify-between flex items-center mt-5">
      <Counter counter={count} increment={increment} decrement={decrement} />
      <Button onClick={() => (count > 0 ? userAction(id, count) : null)} variant="default">
        {title}
      </Button>
    </div>
  )
}
