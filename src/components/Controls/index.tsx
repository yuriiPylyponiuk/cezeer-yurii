import { Button } from "@/components/ui/button";
import React, { FC, useState } from "react";

interface ControlsPropsType {
  id: number;
  add: (id: number, count: number) => void;
  cartCount?: number;
}

export const Controls: FC<ControlsPropsType> = ({ id, add, cartCount = 0 }) => {
  const [count, setCount] = useState(cartCount ? cartCount : 0);

  return (
    // <div className={`${userClass === "end" ? "justify-end" : ""} flex items-center mt-5`}>
    <div className="justify-between flex items-center mt-5">
      <div className="flex items-center mr-7">
        <Button variant="default" onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
          -
        </Button>
        <p className="text-[20px] mx-5">{count}</p>
        <Button variant="default" onClick={() => setCount((prev) => prev + 1)}>
          +
        </Button>
      </div>

      <Button onClick={() => (count > 0 ? add(id, count) : null)} variant="default">
        Buy
      </Button>
    </div>
  );
};
