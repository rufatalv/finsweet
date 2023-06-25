import React from "react";

interface IButtonProps {
  styles?: string;
  children?: React.ReactNode;
  size?: string;
}

let btnSize: string;

const Button: React.FC<IButtonProps> = ({ styles, children, size }) => {
  switch (size) {
    case "lg":
      btnSize = "px-5 py-3 md:lg:px-14 lg:py-4";
      break;

    default:
      btnSize = "px-12 py-4";
      break;
  }
  return (
    <button
      className={`${btnSize} ${styles} transition-all ease duration-400 rounded-[41px]`}
    >
      {children}
    </button>
  );
};

export default Button;
