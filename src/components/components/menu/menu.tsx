//
// Menu component
//

// Imports
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./menu.scss";

// Props
export interface MenuProps {
  children: React.ReactNode;
}

export interface MenuItemProps {
  label: string;
  link: string;
}

// Menu versions
export default function Menu({ children }: MenuProps) {
  return <div className="menu">{children}</div>;
}

// MenuItem versions
export function MenuItem({ label, link }: MenuItemProps) {
  return (
    <Link to={link}>
      <div className="menu__item">{label}</div>
    </Link>
  );
}

export function MenuItemDark({ label, link }: MenuItemProps) {
  return (
    <Link to={link}>
      <div className="menu__item menu__item--dark">{label}</div>
    </Link>
  );
}
