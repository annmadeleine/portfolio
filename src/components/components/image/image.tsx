import React from "react";
import "./image.scss";

export interface ImageProps {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image" />;
}

export function HeaderImage({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image header" />;
}

export function ProjectImage({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image project" />;
}
