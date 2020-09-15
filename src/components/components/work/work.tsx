//
// Work component
//

// Imports
import React, { useState } from "react";
import "./work.scss";
import { ParagraphWork } from "../paragraph/paragraph";
import { ImageWork } from "../image/image";
import { DividerWork } from "../divider/divider";
import {
  ContainerWork,
  ItemWork,
  ItemWorkRight,
  ItemWorkLeft,
} from "../container/container";
import { TitleProject } from "../title/title";

// Props
export interface WorkProps {
  link: string;
  client: string;
  year: string;
  src: string;
  alt: string;
  title: string;
  label: string;
  hoverTitle: string;
  id?: string;
}

// Work versions
export default function Work({
  link,
  client,
  year,
  src,
  alt,
  title,
  label,
  hoverTitle,
  id,
}: WorkProps) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <a href={link} id={id}>
      <div
        className="work"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ContainerWork>
          <TitleProject label={label} showHoverEffect={isHovering} />
          <ItemWorkLeft>
            <ParagraphWork
              client={client}
              year={year}
              showHoverEffect={isHovering}
            />
          </ItemWorkLeft>
          <ItemWork>
            <ImageWork alt={alt} src={src} showHoverEffect={isHovering} />
          </ItemWork>
          <ItemWorkRight>
            <DividerWork title={title} showHoverEffect={isHovering} />
          </ItemWorkRight>
        </ContainerWork>
      </div>
    </a>
  );
}
