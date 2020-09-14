import React, { useState } from "react";
import "./work.scss";

import { ParagraphRotated } from "../paragraph/paragraph";
import { ProjectImage } from "../image/image";
import { ProjectDivider } from "../divider/divider";
import {
  ProjectContainer,
  ProjectItem,
  ProjectItemRight,
  ProjectItemLeft,
} from "../container/container";
import { TitleProject } from "../title/title";

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
        <ProjectContainer>
          <TitleProject label={label} showHoverEffect={isHovering} />
          <ProjectItemLeft>
            <ParagraphRotated
              client={client}
              year={year}
              showHoverEffect={isHovering}
            />
          </ProjectItemLeft>
          <ProjectItem>
            <ProjectImage alt={alt} src={src} showHoverEffect={isHovering} />
          </ProjectItem>
          <ProjectItemRight>
            <ProjectDivider
              title={title}
              hoverTitle={hoverTitle}
              showHoverEffect={isHovering}
            />
          </ProjectItemRight>
        </ProjectContainer>
      </div>
    </a>
  );
}
