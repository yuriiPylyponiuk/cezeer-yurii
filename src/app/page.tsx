import Image from "next/image";
import data from "../../dataset.json";

export default function Home() {
  return (
    <main className="flex mx-16 flex-col">
      {data.map((item) => {
        return (
          <div className="my-10" key={item.id}>
            <Image src={item.image} width={100} height={100} alt={""} />
          </div>
        );
      })}
    </main>
  );
}
