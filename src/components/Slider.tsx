"use client";

import { useState } from "react";

interface SliderProps {
  setPasswordLength: (passwordLength: number) => void;
}

export default function Slider({ setPasswordLength }: SliderProps) {
  const [inputValue, setInputValue] = useState(12);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setInputValue(value);
    setPasswordLength(value);
  };

  return (
    <div className="flex gap-2 md:gap-6 max-w-2xl w-full flex-wrap md:flex-nowrap">
      <label
        htmlFor="passwordLength"
        className="flex gap-2 items-center whitespace-nowrap w-48"
      >
        Password length: <span className="font-semibold">{inputValue}</span>
      </label>
      <input
        id="passwordLength"
        type="range"
        min={8}
        max={48}
        step={1}
        value={inputValue}
        onChange={handleInputChange}
        className="w-full min-w-48"
      />
    </div>
  );
}
