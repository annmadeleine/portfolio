//
// Link component
//

// Imports
import React from "react";
import "./link.scss";

// Props
export interface LinkProps {
  label: string;
  link: string;
}

// Link versions
export default function Link({ label, link }: LinkProps) {
  return (
    <div className="link">
      <a href={link}>
        <span data-hover={label}>{label}</span>
      </a>
    </div>
  );
}
