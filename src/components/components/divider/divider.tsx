//
// Background component
//

// Imports
import React from "react";
import "./divider.scss";

// Props
export interface DividerProps {
  title: string;
  showHoverEffect?: boolean;
}

// Divider versions
export default function Divider({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider__border"></div>
      <div className="divider__title">{title}</div>
    </div>
  );
}

export function DividerNoBorder({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider__title divider__title__no-margin">{title}</div>
    </div>
  );
}

export function DividerNoBorderHidden({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider__title divider__title__no-margin divider__title__hidden">
        {title}
      </div>
    </div>
  );
}

export function DividerWork({ title, showHoverEffect }: DividerProps) {
  return (
    <div className="divider divider__max-width">
      <div
        className={
          showHoverEffect
            ? "divider__border divider__border__hover"
            : "divider__border"
        }
      ></div>
      <div className="divider__title divider__work">
        <span>{title}</span>
      </div>
    </div>
  );
}
