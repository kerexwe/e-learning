import React from "react";
import css from "./Button.module.scss";
import { ButtonProps } from "../../types/types";


const Button: React.FC<ButtonProps> = ({
  text,
  type = "",
  className = "",
  onClick,
}) => {
  return (
    <button className={`${css.button} ${className}`} about={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
