//
// Title component
//

// Imports
import React from "react";
import "./title.scss";

// Props
export interface TitleProps {
  labelUp?: string;
  labelDown?: string;
  label?: string;
  showHoverEffect?: boolean;
}

// Title versions
export default function Title({ labelUp, labelDown }: TitleProps) {
  return (
    <div className="title title__center title__small title--light">
      <h1 className="title title__up">{labelUp}</h1>
      <h1 className="title title__down">{labelDown}</h1>
    </div>
  );
}

export function TitleProject({ label, showHoverEffect }: TitleProps) {
  return (
    <div
      className={
        showHoverEffect
          ? "title title__light title__project title__hover"
          : "title title__light title__project"
      }
    >
      {label}
    </div>
  );
}

export function TitleProjectDetail({ label }: TitleProps) {
  return <div className="title title__project-detail">{label}</div>;
}
