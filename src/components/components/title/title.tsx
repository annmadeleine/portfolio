import React from "react";
import "./title.scss";

export interface TitleProps {
  labelUp?: string;
  labelDown?: string;
  label?: string;
}

export default function Title({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title small light center">
      <h1 className="title title__up">{labelUp}</h1>
      <h1 className="title title__down">{labelDown}</h1>
    </div>
  );
}

export function TitleDark({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title dark rotate small transparent">
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

export function TitleProject({ label }: TitleProps) {
  return (
    <div className="title dark layered project test">
      <h1 className="title small">{label}</h1>
    </div>
  );
}
