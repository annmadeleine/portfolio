//
// Menu component
//

// Imports
import React from "react";
import "./menu.scss";

// Props
export interface MenuProps {
  children: React.ReactNode;
}

// Menu versions
export default function Menu({ children }: MenuProps) {
  return <div className="menu">{children}</div>;
}
