//
// Name component
//

// Imports
import React from "react";
import "./name.scss";
import { Link } from "react-router-dom";

// Props
export interface NameProps {
  label: string;
  link: string;
}

// Name versions
export default function Name({ label, link }: NameProps) {
  return (
    <Link to={link}>
      <h2 className="name name--dark">{label}</h2>
    </Link>
  );
}

export function NameLight({ label, link }: NameProps) {
  return (
    <Link to={link}>
      <h2 className="name name--light">{label}</h2>
    </Link>
  );
}
