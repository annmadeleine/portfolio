//
// Image component
//

// Imports
import React from "react";
import "./image.scss";

// Props
export interface ImageProps {
  src: string;
  alt: string;
  showHoverEffect?: boolean;
}

// Image versions
export default function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image" />;
}

export function ImageHeader({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image image__header" />;
}

export function ImageWork({ src, alt, showHoverEffect }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={
        showHoverEffect ? "image image__work image__hover" : "image image__work"
      }
    />
  );
}
