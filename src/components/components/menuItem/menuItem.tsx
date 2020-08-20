import React from "react";
import { Link } from "react-router-dom";
import "./menuItem.scss";

export interface MenuItemProps {
  label: string;
  link: string;
}

export default function MenuItem({ label, link }: MenuItemProps) {
  return (
    <Link to={link}>
      <div className="menu__item">{label}</div>
    </Link>
  );
}

export function MenuItemDark({ label, link }: MenuItemProps) {
  return (
    <Link to={link}>
      <div className="menu__item dark">{label}</div>
    </Link>
  );
}
