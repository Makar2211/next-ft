import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Связаться с нами",
  description: "This is Contact",
};

const Contact = () => {
  return (
    <div>
      <h1 className="text-[60px]  text-center">Lets Keep in Touch</h1>
      <div className="flex items-center gap-[20px] flex-wrap">
        <div className="flex-1 h-[600px] relative">
          <Image
            src="/contact.png"
            alt="contacts"
            fill={true}
            className="animate-movecontact object-cover"
          />
        </div>
        <form className="flex-1 flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            className="p-5 bg-transparent outline-none color-[#bbb] border-2 border-solid border-gray-300 text-xl font-bold "
          />
          <input
            type="email"
            placeholder="Email"
            min={2}
            className="p-5 bg-transparent outline-none color-[#bbb] border-2 border-solid border-gray-300 text-xl font-bold"
          />
          <textarea
            className="p-5 bg-transparent outline-none color-[#bbb] border-2 border-solid border-gray-300 text-xl font-bold"
            placeholder="Message"
            cols={30}
            rows={3}
          ></textarea>
          <Link href="#">
            <Button
              text="Send"
              style="p-[15px] w-[120px] mt-5 rounded bg-[#53c28b] color-white cursor-pointer br-[5px] font-bold"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;
