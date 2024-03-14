"use client";
import { addItem } from "@/lib/feature/list/listSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controls } from "../Controls";

export const List = () => {
  const { list } = useSelector((state: RootState) => state.main);
  const dispatch = useDispatch();

  const addToCart = (id: number, count: number) => {
    dispatch(addItem({ id: id, count: count }));
  };

  return (
    <>
      {list.map((item) => {
        return (
          <div className="my-5 border-primary border-2 rounded-md items-center p-10 flex flex-row" key={item.id}>
            <Image src={item.image} className="w-[192px] h-[144px]" width={100} height={100} alt={""} />
            <div className="ml-10">
              <p className="text-[20px] font-semibold mb-3">{item.name}</p>
              <p>{item.description}</p>
              <div className="flex flex-row justify-between mt-5">
                <p>Lacation: {item.country}</p>
                <p>Offered Volume: {item.offered_volume_in_tons} t</p>
                <p>Distribution Weight: {item.distribution_weight} t</p>
                <p>Price: {item.price_per_ton}$</p>
              </div>
              <Controls id={item.id} add={addToCart} />
            </div>
          </div>
        );
      })}
    </>
  );
};
