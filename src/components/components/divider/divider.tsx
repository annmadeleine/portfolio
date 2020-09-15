//
// Background component
//

// Imports
import React from "react";
import "./divider.scss";

// Props
export interface DividerProps {
  title: string;
  hoverTitle?: string;
  showHoverEffect?: boolean;
}

// Divider versions
export default function Divider({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="border"></div>
      <div className="divider-title">{title}</div>
    </div>
  );
}

export function DividerNoBorder({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider-title no-margin">{title}</div>
    </div>
  );
}

export function ProjectDivider({
  title,
  hoverTitle,
  showHoverEffect,
}: DividerProps) {
  return (
    <div className="divider max-width">
      <div className={showHoverEffect ? "hover border" : "border"}></div>
      <div
        className={
          showHoverEffect
            ? "hover after divider-title project"
            : "divider-title project"
        }
      >
        <span data-hover={hoverTitle}>{title}</span>
      </div>
    </div>
  );
}
