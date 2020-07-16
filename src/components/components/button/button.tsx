import React from "react";
import "./button.scss";

export interface ButtonProps {
  label: string;
  disabled: boolean;
}

export default function Button({ disabled, label }: ButtonProps) {
  return (
    <button className="button" disabled={disabled}>
      {label}
    </button>
  );
}
