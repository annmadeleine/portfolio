import React from "react";
import "./paragraph.scss";

export interface ParagraphProps {
  text: string;
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
