import React from "react";
import "./divider.scss";

export interface DividerProps {
  title: string;
  hoverTitle?: string;
}

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

export function ProjectDivider({ title, hoverTitle }: DividerProps) {
  return (
    <div className="divider max-width">
      <div className="border"></div>
      <div className="divider-title project" data-hover={hoverTitle}>
        {title}
      </div>
    </div>
  );
}
