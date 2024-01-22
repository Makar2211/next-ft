import Link from "next/link";
import { links } from "@/constants";
import Button from "./Button";
import DarkModelToggle from "./DarkModelToggle";

const NavBar = () => {
  return (
    <nav className="h-[100px] flex justify-between items-center">
      <Link className="font-bold size-5" href="/">
        Main
      </Link>
      <div className="flex items-center gap-5">
        <DarkModelToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <Button
          text="Logout"
          style="p-[5px] border-0 bg-[#53c28b] color-white cursor-pointer br-[3px]"
        />
      </div>
    </nav>
  );
};

export default NavBar;
