import React from "react";
import "./title.scss";

export interface TitleProps {
  labelUp?: string;
  labelDown?: string;
  label?: string;
  transparent?: string;
}

export default function Title({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title big light center">
      <h1 className="title title__up">{labelUp}</h1>
      <h1 className="title title__down">{labelDown}</h1>
    </div>
  );
}

export function TitleDark({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title big dark rotate">
      <h1 className="title title__up">{labelUp}</h1>
      <h1 className="title title__down">{labelDown}</h1>
    </div>
  );
}

export function TitleTransparent({ label }: TitleProps) {
  return (
    <div className="title transparent small dark">
      <h1 className="title">{label}</h1>
    </div>
  );
}

export function TitleProject({ label, transparent }: TitleProps) {
  return (
    <div className="title dark layered center">
      <h1 className="title small">{label}</h1>
      <h1 className="title big transparent project">{transparent}</h1>
    </div>
  );
}
