//
// Container component
//

// Imports
import React from "react";
import "./container.scss";

// Props
export interface ContainerProps {
  children: React.ReactNode;
}

// Container versions
export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}

export function ContainerNoMargin({ children }: ContainerProps) {
  return <div className="container container__no-margin">{children}</div>;
}

export function ContainerWork({ children }: ContainerProps) {
  return <div className="container__work">{children}</div>;
}

export function Row({ children }: ContainerProps) {
  return <div className="container__row">{children}</div>;
}

export function Column({ children }: ContainerProps) {
  return <div className="container__column">{children}</div>;
}

export function ItemSmall({ children }: ContainerProps) {
  return <div className="item item__small">{children}</div>;
}

export function ItemSmallCollapse({ children }: ContainerProps) {
  return <div className="item item__small item__collapse">{children}</div>;
}

export function ItemMedium({ children }: ContainerProps) {
  return <div className="item item__medium">{children}</div>;
}

export function ItemBig({ children }: ContainerProps) {
  return <div className="item item__big">{children}</div>;
}

export function ItemWorkDetailSmall({ children }: ContainerProps) {
  return <div className="item item__small item__work-detail">{children}</div>;
}

export function ItemWork({ children }: ContainerProps) {
  return <div className="item__work">{children}</div>;
}

export function ItemWorkLeft({ children }: ContainerProps) {
  return <div className="item__work item__work__left">{children}</div>;
}

export function ItemWorkRight({ children }: ContainerProps) {
  return <div className="item__work item__work__right">{children}</div>;
}
