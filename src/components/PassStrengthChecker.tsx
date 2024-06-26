import { GeneratePasswordProps } from "@/types";

export default function PassStrengthChecker({
  upperCaseEnabled,
  numbersEnabled,
  symbolsEnabled,
  passwordLength,
  className
}: GeneratePasswordProps) {
  let status = "";
  let style = "";

  // Only lowercase letters
  if (
    !upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength <= 10
  ) {
    status = "Very Weak";
    style = "bg-red-700";
  } else if (
    !upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 11 &&
    passwordLength <= 15
  ) {
    status = "Weak";
    style = "bg-orange-700";
  } else if (
    !upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 16
  ) {
    status = "Ok";
    style = "bg-amber-600";
  }

  // Lowercase letters and uppercase letters
  else if (
    upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength <= 8
  ) {
    status = "Very Weak";
    style = "bg-red-700";
  } else if (
    upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 9 &&
    passwordLength <= 13
  ) {
    status = "Weak";
    style = "bg-orange-700";
  } else if (
    upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 14 &&
    passwordLength <= 15
  ) {
    status = "Ok";
    style = "bg-amber-600";
  } else if (
    upperCaseEnabled &&
    !numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 16
  ) {
    status = "Very Strong";
    style = "bg-green-700";
  }

  // Lowercase letters, uppercase letters and numbers
  else if (
    upperCaseEnabled &&
    numbersEnabled &&
    !symbolsEnabled &&
    passwordLength <= 8
  ) {
    status = "Very Weak";
    style = "bg-red-700";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 9 &&
    passwordLength <= 12
  ) {
    status = "Weak";
    style = "bg-orange-700";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 13 &&
    passwordLength <= 15
  ) {
    status = "Ok";
    style = "bg-amber-600";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    !symbolsEnabled &&
    passwordLength >= 16
  ) {
    status = "Very Strong";
    style = "bg-green-700";
  }

  // Lowercase letters, uppercase letters, numbers and symbols
  else if (
    upperCaseEnabled &&
    numbersEnabled &&
    symbolsEnabled &&
    passwordLength <= 8
  ) {
    status = "Very Weak";
    style = "bg-red-700";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    symbolsEnabled &&
    passwordLength >= 9 &&
    passwordLength <= 12
  ) {
    status = "Weak";
    style = "bg-orange-700";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    symbolsEnabled &&
    passwordLength >= 13 &&
    passwordLength <= 14
  ) {
    status = "Ok";
    style = "bg-amber-600";
  } else if (
    upperCaseEnabled &&
    numbersEnabled &&
    symbolsEnabled &&
    passwordLength >= 15
  ) {
    status = "Very Strong";
    style = "bg-green-700";
  } else return null;

  return (
    <span
      className={`items-center justify-center whitespace-nowrap px-2 py-1 text-sm cursor-default ${style} ${className}`}
    >
      {status}
    </span>
  );
}
