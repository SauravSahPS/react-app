import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  buttonClicked: () => void;
}

const Button = ({ children, color, buttonClicked }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default Button;
