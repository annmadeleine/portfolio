import React from "react";
import "./container.scss";

export interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}

export function Row({ children }: ContainerProps) {
  return <div className="row">{children}</div>;
}

export function Column({ children }: ContainerProps) {
  return <div className="column">{children}</div>;
}

export function ItemSmall({ children }: ContainerProps) {
  return <div className="item small">{children}</div>;
}

export function ItemBig({ children }: ContainerProps) {
  return <div className="item big">{children}</div>;
}
