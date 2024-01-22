import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Hero from "/public/hero.png";
export default function Home() {
  return (
    <main className="flex items-center gap-[100px] ">
      <div className="flex-[1] flex flex-col gap-[50px]">
        <h1 className="text-5xl bg-gradient-to-b from-green-800 to-gray-300 bg-clip-text text-transparent">
          The Future of AI in the next few years
        </h1>
        <p className="text-[24px] font-[300]">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Link href="portfolio">
          <Button
            style="p-[20px] rounded bg-[#53c28b] color-white cursor-pointer br-[5px] font-bold"
            text="See Our Works"
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-[50px]">
        <Image
          src={Hero}
          alt="main photo"
          className="w-[100%] h-[500px] object-contain animate-move"
        />
      </div>
    </main>
  );
}
