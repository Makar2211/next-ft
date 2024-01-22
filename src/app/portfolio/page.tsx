import Link from "next/link";
import React from "react";

import { portfolio } from "../../constants/index";
import Image from "next/image";
import categoryPageId from "./[id]/page";

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-5 mx-0 text-4xl font-bold">Choose a gallery</h1>
      <div className="flex gap-12">
        {portfolio.map((item) => (
          <Link href={item.url} key={item.imageURL}>
            <div className="border-2 border-solid border-[#bbb] rounded w-[300px] h-[400px] relative bg-cover hover:text-[#53c28b]">
              <Image
                src={item.imageURL}
                width={300}
                height={400}
                alt={item.text}
                className="rounded-5 w-full h-full object-cover"
              />
              <span className="absolute right-2 bottom-2 text-4xl font-bold">
                {item.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
