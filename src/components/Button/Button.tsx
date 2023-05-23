import React, { MouseEventHandler, ReactNode } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  children?: ReactNode;
  href?: string;
  text: React.ReactNode;
  className?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`${css.button} ${className}`}
      about={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
