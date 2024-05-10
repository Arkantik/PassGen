"use client";
import { useState } from "react";
import SwitchComponent from "@/components/Switch";
import GeneratePassword from "@/components/GeneratePassword";
import Slider from "@/components/Slider";

export default function Home() {
  const [upperCaseEnabled, setUpperCaseEnabled] = useState(true);
  const [numbersEnabled, setNumbersEnabled] = useState(true);
  const [symbolsEnabled, setSymbolsEnabled] = useState(true);
  const [passwordLength, setPasswordLength] = useState(12);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 overflow-hidden min-w-fit">
      <div className="flex flex-col gap-2 mb-12 relative justify-center items-center">
        <h1 className="text-6xl md:text-8xl font-bold text-center">PassGen</h1>
        <p className="text-center text-zinc-300 text md:text-xl">
          One click, endless security - craft a robust password lightning-fast
        </p>
        <div
          className="w-full -z-20 absolute flex place-items-center 
        before:h-[300px] 
        before:md:h-[560px]
        before:w-full 
        md:before:-translate-x-1/4 
        md:before:translate-y-1/4
        before:rounded-full 
        before:bg-gradient-to-br 
        before:from-transparent 
        before:to-blue-700
        before:blur-2xl 
        before:content-[''] 
        before:opacity-10
        after:absolute 
        after:h-[180px] 
        after:w-full 
        md:after:translate-x-3/4
        after:bg-gradient-conic 
        after:blur-2xl 
        after:content-['']
        after:from-sky-900 
        after:via-[#0141ff] 
        after:opacity-40 
        sm:after:w-[440px]"
        />
      </div>
      <div className="flex flex-col gap-6 w-full max-w-3xl justify-between items-center text-sm md:text-md">
        <GeneratePassword
          upperCaseEnabled={upperCaseEnabled}
          numbersEnabled={numbersEnabled}
          symbolsEnabled={symbolsEnabled}
          passwordLength={passwordLength}
        />
        <Slider setPasswordLength={setPasswordLength} />
        <ol className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start md:justify-center max-w-2xl w-full">
          <SwitchComponent
            switchName="Uppercase"
            enabled={upperCaseEnabled}
            setEnabled={setUpperCaseEnabled}
          />
          <SwitchComponent
            switchName="Numbers"
            enabled={numbersEnabled}
            setEnabled={setNumbersEnabled}
          />
          <SwitchComponent
            switchName="Symbols"
            enabled={symbolsEnabled}
            setEnabled={setSymbolsEnabled}
          />
        </ol>
      </div>
      <div className="fixed bottom-0 flex justify-center md:justify-end items-center w-full md:px-12 pb-4">
        <span className="flex gap-2 text-sm">
          Made by Jérémy Dohin
          <span>|</span>
          <a
            href="https://github.com/Arkantik/PassGen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </span>
      </div>
    </main>
  );
}
