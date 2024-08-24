import React, { useEffect, useRef, useState } from "react";
import BaseCmdInput from "./BaseCmdInput";

interface CmdUserInputProp {
	onSubmit: (cmd: string) => void;
	language: string;
}

export default function CmdUserInput({ onSubmit, language }: CmdUserInputProp) {
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [showFakeCursor, setShowFakeCursor] = useState(false);
	const [prevCmd, setPrevCmd] = useState<string[]>([]);
	const [prevCmdIndex, setPrevCmdIndex] = useState(-1);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = inputRef.current.value.trim();
		if (value) {
			onSubmit(value);
			setPrevCmd((currentValue) => [value, ...currentValue]);
		}
		setPrevCmdIndex(-1);
		inputRef.current.value = "";
	};

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
            e.preventDefault(); // Tarayıcı çubuğuna gitmeyi engelle
            e.stopPropagation(); // Etkinliği üst bileşenlere yayılmasını engelle
            setPrevCmd([]);
        } else if (
            document.activeElement !== inputRef.current &&
            !e.ctrlKey &&
            e.key !== "c" &&
            e.key.toLowerCase() !== "meta" &&
            e.key !== "ArrowUp"
        ) {
            inputRef.current?.focus();
        } else if (e.key === "ArrowUp") {
            inputRef.current?.blur();
            setPrevCmdIndex((currentValue) => currentValue + 1);
        } else if (e.key === "ArrowDown") {
            setPrevCmdIndex((currentValue) => currentValue - 1);
        }
    };
    
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    

	useEffect(() => {
		const input = inputRef.current;
		let timeout: any = null;
		if (input) {
			input.value = prevCmd[prevCmdIndex] ? prevCmd[prevCmdIndex] : "";
			inputRef.current?.focus();
			timeout = setTimeout(
				() => inputRef.current.setSelectionRange(-1, -1),
				10
			);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [prevCmdIndex, prevCmd]);

	return (
		<BaseCmdInput
			Children={
				<form onSubmit={handleSubmit} className="w-full flex items-center">
					{showFakeCursor && (
						<div className=" w-1 h-5 animate-blink bg-white translate-y-2 -translate-x-3"></div>
					)}
					<input
						className="translate-y-2 -translate-x-3 bg-inherit w-full focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider"
						autoFocus
						onBlur={() => {
							setShowFakeCursor(true);
						}}
						onFocus={() => {
							setShowFakeCursor(false);
						}}
						ref={inputRef}
						placeholder={
							language === "tr"
								? "M.Fatih_BEZİR , bio , beceri , iletişim, hakkında, yardım..."
								: "M.Fatih_BEZİR , bio , skill , contact, about, help..."
						}
					/>
				</form>
			}
		/>
	);
}
