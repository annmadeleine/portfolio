import React from "react";
import "./paragraph.scss";

export interface ParagraphProps {
  text?: string;
  client?: string;
  year?: string;
}

export default function Paragraph({ text }: ParagraphProps) {
  return <p className="paragraph">{text}</p>;
}

export function ParagraphRight({ text }: ParagraphProps) {
  return <p className="paragraph right">{text}</p>;
}

export function ParagraphSmall({ text }: ParagraphProps) {
  return <p className="paragraph small">{text}</p>;
}

export function ParagraphRotated({ client, year }: ParagraphProps) {
  return (
    <div className="paragraph-rotated">
      <p className="paragraph dark small rotate">
        {client} {year}
      </p>
    </div>
  );
}
