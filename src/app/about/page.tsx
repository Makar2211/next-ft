import Button from "@/components/Button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас",
  description: "About page",
};

const About = () => {
  return (
    <div className="mb-10">
      <div className="w-full h-[300px] relative">
        <Image
          src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
          fill={true}
          alt="about us"
          className="object-cover filter grayscale-100"
        />
        <div className="absolute bottom-[20px] left-[20px] bg-green-500 p-[5px] text-white">
          <h1 className="font-[900] text-3xl">Lorem ipsum dolor sit</h1>
          <h2 className="font-[600] text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className="flex gap-10 justify-between items-start mt-10">
        <div className="">
          <h2 className="text-2xl font-bold">Who Are We?</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className="">
          <h1 className="text-2xl font-bold">What We Do?</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <Button
              style="p-[20px] mt-5 rounded bg-[#53c28b] color-white cursor-pointer br-[5px] font-bold"
              text="Contact"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
