import { MouseEventHandler, ReactNode } from "react";
export interface ThemeType {
  themeDark: boolean;
}

export interface ButtonProps {
  children?: ReactNode;
  text: React.ReactNode | string;
  className?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
