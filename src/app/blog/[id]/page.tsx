import { localhost } from "@/constants";
import { Post } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const post = await fetch(`${localhost}/api/posts/${id}`).then((res) =>
    res.json()
  );

  return {
    title: post.title,
    description: post.desc,
  };
}

async function getData(id: string) {
  const res = await fetch(`${localhost}/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PageId = async ({ params }: any) => {
  const data: Post = await getData(params.id);
  return (
    <div className=" flex justify-center gap-40 ">
      <div className="relative">
        <h1 className="text-3xl">{data.title}</h1>
        <p className="text-2x mt-10">{data.desc}</p>
        <div className="flex items-center gap-2 mt-10">
          <Image
            src={data.image}
            alt="image "
            width={40}
            height={40}
            className="object-cover rounded-[100%]"
          />
          <span className="text-3xl ">{data.username}</span>
        </div>
        <div className="mt-12 text-[20px] font-[300] text-dark">
          <p className="text-2x">{data.content}</p>
        </div>
      </div>
      <div className="relative">
        <Image
          src={data.image}
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
