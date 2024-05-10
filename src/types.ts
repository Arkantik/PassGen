export interface GeneratePasswordProps {
  upperCaseEnabled: boolean;
  numbersEnabled: boolean;
  symbolsEnabled: boolean;
  passwordLength: number;
  className?: string;
}

export interface SliderProps {
  setPasswordLength: (passwordLength: number) => void;
}

export interface SwitchProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  switchName: string;
}
