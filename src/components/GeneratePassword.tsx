"use strict";

import { ToastConfig } from "@/config/ToastConfig";
import { Button } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface GeneratePasswordProps {
  upperCaseEnabled: boolean;
  numbersEnabled: boolean;
  symbolsEnabled: boolean;
  passwordLength: number;
}

const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function GeneratePassword({
  upperCaseEnabled,
  numbersEnabled,
  symbolsEnabled,
  passwordLength
}: GeneratePasswordProps) {
  const [password, setPassword] = useState("");
  const [isRotating, setIsRotating] = useState(false);

  const copyPasswordToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.info("Password copied to clipboard!", ToastConfig);
      })
      .catch((err) => {
        toast.error("Failed to copy password!", ToastConfig);
      });
  };

  const generatePassword = () => {
    let generatedPassword = "";
    let characters = lowercaseChar;

    if (upperCaseEnabled) characters += uppercaseChar;
    if (numbersEnabled) characters += numbers;
    if (symbolsEnabled) characters += symbols;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 100);
    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upperCaseEnabled, numbersEnabled, symbolsEnabled, passwordLength]);

  return (
    <div className="flex flex-col md:flex-row gap-4 text-sm md:text-lg w-full">
      <span className="rounded-lg flex gap-6 py-2 px-4 min-w-52 w-full justify-between items-center border border-zinc-800 bg-gradient-to-b backdrop-blur-2xl bg-zinc-800/20">
        <span className="w-full truncate" title={password}>
          {password}
        </span>
        <Button
          className="block rounded hover:bg-zinc-800 p-1"
          onClick={generatePassword}
        >
          <span className="sr-only">Re-generate Password</span>
          <Image
            src="/refresh.svg"
            alt=""
            width={24}
            height={24}
            className={`block w-5 h-5 ${isRotating && "transform duration-100 -rotate-180"}`}
          />
        </Button>
      </span>
      <Button
        className="min-w-52 md:min-w-fit rounded-lg bg-blue-600 py-2 px-4 text-white hover:bg-sky-500"
        onClick={copyPasswordToClipboard}
        aria-label="copy password button"
      >
        Copy
      </Button>
    </div>
  );
}
