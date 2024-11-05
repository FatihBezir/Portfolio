import React from "react";
import { VscTerminalBash } from "react-icons/vsc";
import { US, TR } from "country-flag-icons/react/3x2";

interface NavbarProps {
  onLanguageChange: (lang: string) => void;
}

export default function Navbar({ onLanguageChange }: NavbarProps) {
  const boxs = [
    {
      color: "bg-red-500",
    },
    {
      color: "bg-yellow-500",
    },
    {
      color: "bg-green-500",
    },
  ];

  const handleFlagClick = (lang: string) => {
    onLanguageChange(lang);
  };

  return (
    <div className="navbar bg-slate-800 text-gray-300 border-slate-800 p-2 flex items-center justify-between border-t-2 border-x-2 rounded-t-md w-full sm:max-w-4xl mx-auto mt-0 sm:mt-4 h-16">
      <div className="flex gap-2 items-center justify-center">
        {boxs.map(({ color }, index) => {
          return (
            <div key={index} className={`w-3 h-3 ${color} rounded-full`}></div>
          );
        })}
      </div>
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="flex items-center gap-1">
          <VscTerminalBash className="text-sm sm:text-xl" />
          <h1 className="text-center text-xs sm:text-base leading-none">
            M._Fatih_BEZİR/terminal_portfolio
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <US
          title="United States"
          className="cursor-pointer"
          onClick={() => handleFlagClick("en")}
          style={{ width: "1.5em", height: "1.5em" }}
        />
        <TR
          title="Turkey"
          className="cursor-pointer"
          onClick={() => handleFlagClick("tr")}
          style={{ width: "1.5em", height: "1.5em" }}
        />
      </div>
    </div>
  );
}
