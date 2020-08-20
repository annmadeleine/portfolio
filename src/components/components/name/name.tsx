import React from "react";
import "./name.scss";

export interface NameProps {
  label: string;
}

export default function Name({ label }: NameProps) {
  return <div className="name">{label}</div>;
}
