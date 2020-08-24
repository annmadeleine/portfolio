import React from "react";
import { Link } from "react-router-dom";
import "./social.scss";

export interface SocialProps {
  label: string;
  link: string;
}

export default function Social({ label, link }: SocialProps) {
  return (
    <Link to={link}>
      <div className="social">{label}</div>
    </Link>
  );
}
