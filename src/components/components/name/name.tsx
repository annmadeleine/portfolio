import React from "react";
import "./name.scss";

export interface NameProps {
  label: string;
}

export default function Name({ label }: NameProps) {
  return <h2 className="name dark">{label}</h2>;
}

export function NameTitle({ label }: NameProps) {
  return <h2 className="name light">{label}</h2>;
}
