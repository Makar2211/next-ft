import Image from "next/image";
import { footerSocial } from "@/constants";

const Footer = () => {
  return (
    <footer className="h-[50px] text-[14px] flex items-center justify-between absolute bottom-0 w-full">
      <div>2024 NextFT. All rights reserved</div>
      <div className="flex items-center gap-[10px]">
        {footerSocial.map((social) => (
          <Image
            key={social.alt}
            src={social.url}
            width={25}
            height={25}
            alt={social.alt}
            className="opacity-60 cursor-pointer"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
