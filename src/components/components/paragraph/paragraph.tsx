//
// Paragraph component
//

// Imports
import React from "react";
import "./paragraph.scss";

// Props
export interface ParagraphProps {
  text?: string;
  client?: string;
  year?: string;
  showHoverEffect?: boolean;
}

// Paragraph versions
export default function Paragraph({ text }: ParagraphProps) {
  return <p className="paragraph">{text}</p>;
}

export function ParagraphRight({ text }: ParagraphProps) {
  return <p className="paragraph right">{text}</p>;
}

export function ParagraphSmall({ text }: ParagraphProps) {
  return <p className="paragraph small">{text}</p>;
}

export function ParagraphRotated({
  client,
  year,
  showHoverEffect,
}: ParagraphProps) {
  return (
    <div className="paragraph-rotated">
      <p
        className={
          showHoverEffect
            ? "paragraph dark small rotate"
            : "paragraph light small rotate"
        }
      >
        {client} {year}
      </p>
    </div>
  );
}
