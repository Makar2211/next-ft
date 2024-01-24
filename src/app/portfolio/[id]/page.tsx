import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { itemsPortfolio } from "@/constants";
import { notFound } from "next/navigation";
interface PropsCatedoryParams {
  params: {
    id: string;
  };
}

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface PortfolioData {
  [category: string]: PortfolioItem[];
}

const getData = (
  category: string
): PortfolioItem[] | { title: string; text: string } => {
  const data = itemsPortfolio[category];

  if (data) {
    return data;
  }

  return notFound();
};

const categoryPageId = ({ params }: PropsCatedoryParams) => {
  const data = getData(params.id);
  return (
    <div>
      <h1 className="text-[#53c28b] text-4xl ">{params.id}</h1>

      {Array.isArray(data) &&
        data.map((item: PortfolioItem) => (
          <>
            <div
              key={item.id}
              className="flex gap-12 mt-12 mb-24 flex-wrap odd:flex-row-reverse"
            >
              <div className="flex-1 flex flex-col gap-5 justify-center">
                <h1 className="text-5xl">{item.title}</h1>
                <p className="text-2xl">{item.desc}</p>
                <Link href="#">
                  <Button
                    style="p-[20px] rounded bg-[#53c28b] color-white cursor-pointer br-[5px] font-bold"
                    text="See More"
                  />
                </Link>
              </div>
              <div className="flex-1 h-[500px] relative">
                <Image
                  className="object-cover"
                  fill={true}
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default categoryPageId;
