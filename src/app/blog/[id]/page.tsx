import { Post } from "@/types";
import Image from "next/image";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PageId = async ({ params }: any) => {
  const data = await getData(params.id);
  return (
    <div className=" flex justify-center gap-40 ">
      <div className="relative">
        <h1 className="text-3xl">{data.title}</h1>
        <p className="text-2x mt-10">{data.body}</p>
        <div className="flex items-center gap-2 mt-10">
          <Image
            src=""
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-[100%]"
          />
          <span className="text-3xl ">Makar user Name</span>
        </div>
        <div className="mt-12 text-[20px] font-[300] text-dark">
          <p className="text-2x">Another text</p>
        </div>
      </div>
      <div className="relative">
        <Image
          src=""
          alt="full image"
          width={400}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PageId;
