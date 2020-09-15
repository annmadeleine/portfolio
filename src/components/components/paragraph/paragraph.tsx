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
  return <p className="paragraph paragraph__right">{text}</p>;
}

export function ParagraphSmall({ text }: ParagraphProps) {
  return <p className="paragraph paragraph__small">{text}</p>;
}

export function ParagraphWork({
  client,
  year,
  showHoverEffect,
}: ParagraphProps) {
  return (
    <div className="paragraph__work">
      <p
        className={
          showHoverEffect
            ? "paragraph paragraph--dark paragraph__small paragraph__workItem"
            : "paragraph paragraph--light paragraph__small paragraph__workItem"
        }
      >
        {client} {year}
      </p>
    </div>
  );
}
