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
  return <div className="container no-margin">{children}</div>;
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

export function ItemSmallCollapse({ children }: ContainerProps) {
  return <div className="item small collapse">{children}</div>;
}

export function ItemProjectDetailSmall({ children }: ContainerProps) {
  return <div className="item small project-detail">{children}</div>;
}

export function ItemMedium({ children }: ContainerProps) {
  return <div className="item medium">{children}</div>;
}

export function ItemBig({ children }: ContainerProps) {
  return <div className="item big">{children}</div>;
}

export function ProjectContainer({ children }: ContainerProps) {
  return <div className="project-container">{children}</div>;
}

export function ProjectItem({ children }: ContainerProps) {
  return <div className="project-item">{children}</div>;
}

export function ProjectItemLeft({ children }: ContainerProps) {
  return <div className="project-item left">{children}</div>;
}

export function ProjectItemRight({ children }: ContainerProps) {
  return <div className="project-item right">{children}</div>;
}
