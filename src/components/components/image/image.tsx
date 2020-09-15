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

export function HeaderImage({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="image header" />;
}

export function ProjectImage({ src, alt, showHoverEffect }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={showHoverEffect ? "hover image project" : "image project"}
    />
  );
}
