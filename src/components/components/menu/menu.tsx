import React from "react";
import "./menu.scss";

export interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return <div className="menu">{children}</div>;
}
