import React from "react";
import "./divider.scss";

export interface DividerProps {
  title: string;
}

export default function Divider({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="border"></div>
      <div className="title with-border">{title}</div>
    </div>
  );
}

export function DividerNoBorder({ title }: DividerProps) {
  return (
    <div className="divider">
      <div className="title">{title}</div>
    </div>
  );
}
