"use client";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useSelector } from "react-redux";
// import data from "../../dataset.json";

export default function Home() {
  const { list } = useSelector((state: RootState) => state.list);
  console.log(list);

  return (
    <main className="flex mx-16 flex-col">
      {list.map((item) => {
        return (
          <div className="my-10" key={item.id}>
            <Image src={item.image} width={100} height={100} alt={""} />
          </div>
        );
      })}
    </main>
  );
}
