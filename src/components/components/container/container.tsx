import React from "react";
import "./container.scss";

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}

export function OneContainer({ children }: ContainerProps) {
  return <div className="item one left">{children}</div>;
}

export function TwoContainer({ children }: ContainerProps) {
  return <div className="item two right">{children}</div>;
}
