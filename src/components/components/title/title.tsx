import React from "react";
import "./title.scss";

export interface TitleProps {
  labelUp: string;
  labelDown: string;
  label: string;
}

export default function Title({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title big">
      <div className="title__up">{labelUp}</div>
      <div className="title__down">{labelDown}</div>
    </div>
  );
}

export function TitleDark({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title big dark">
      <div className="title__up">{labelUp}</div>
      <div className="title__down">{labelDown}</div>
    </div>
  );
}

export function TitleTransparent({ label }: TitleProps) {
  return (
    <div className="title transparent small">
      <div className="title">{label}</div>
    </div>
  );
}
