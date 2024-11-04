import React, { useEffect, useState, useRef } from "react";
import renderCmd from "../utils/renderCmd";
import CmdUserInput from "./CmdUserInput";
import EnteredCmd from "./EnteredCmd";
import TodayDate from "./TodayDate";
import Help from "./commands/Help";
import Navbar from "./Navbar";
import Welcome from "./commands/Welcome";
import { useTranslation } from "react-i18next";

export default function TerminalBox() {
  const { i18n } = useTranslation();
  const [enteredCmd, setEnteredCmd] = useState([
    {
      cmd: "",
      Component: Welcome,
      time: new Date().toLocaleTimeString(),
    },
    {
      cmd: i18n.language === "tr" ? "yardım" : "help",
      Component: Help,
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "auto" });
  }, [enteredCmd]);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.body.removeEventListener("keydown", handleKeyEvent);
    };
  }, []);

  const handleSubmit = (cmd: string) => {
    setEnteredCmd((currentCmd) => [
      ...currentCmd,
      {
        ...renderCmd(cmd, i18n.language),
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
      setEnteredCmd([]);
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setEnteredCmd((currentCmd) => {
      const updatedCmd = currentCmd.map((cmd) => {
        if (cmd.cmd === "yardım" || cmd.cmd === "help") {
          return {
            ...cmd,
            cmd: lang === "tr" ? "yardım" : "help",
          };
        }
        return cmd;
      });
      return updatedCmd;
    });
  };

  // Ekran genişliğini kontrol etmek için bir state kullanıyoruz
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? "relative h-screen w-full overflow-hidden" : ""}>
      <Navbar onLanguageChange={handleLanguageChange} />
      <div
        className={`max-w-4xl mx-auto text-gray-300 text-xl p-2 overflow-y-auto ${
          isMobile ? "h-[calc(100vh-56px)]" : "h-55vh"
        } bg-black bg-opacity-75 box terminal-box`}
      >
        <TodayDate />
        <EnteredCmd enteredCmd={enteredCmd} />
        <CmdUserInput onSubmit={handleSubmit} language={i18n.language} />
        <div ref={dummyRef}></div>
      </div>
    </div>
  );
}
