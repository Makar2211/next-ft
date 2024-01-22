"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModelToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const onChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-[42px] h-[30px] border-[1.5px] border-solid border-[#53c28b] rounded-[30px] flex items-center justify-between p-[2px] relative cursor-pointer">
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className={`w-[17px] h-[17px] bg-[#53c28b] rounded-[50%] absolute `}
        onClick={onChangeTheme}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModelToggle;
