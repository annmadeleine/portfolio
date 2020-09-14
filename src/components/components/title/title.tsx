import React from "react";
import "./title.scss";

export interface TitleProps {
  labelUp?: string;
  labelDown?: string;
  label?: string;
  showHoverEffect?: boolean;
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

export function TitleProject({ label, showHoverEffect }: TitleProps) {
  return (
    <div
      className={
        showHoverEffect ? "hover title light project" : "title light project"
      }
    >
      {label}
    </div>
  );
}

export function TitleProjectDetail({ label }: TitleProps) {
  return <div className="title project-detail">{label}</div>;
}
