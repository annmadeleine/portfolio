import React from "react";
import "./social.scss";

export interface SocialProps {
  label: string;
  link: string;
}

export default function Social({ label, link }: SocialProps) {
  return (
    <div className="social">
      <a href={link}>{label}</a>
    </div>
  );
}
