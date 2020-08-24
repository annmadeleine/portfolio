import React from "react";
import "./grid.scss";

export interface GridProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <div className="grid">{children}</div>;
}
