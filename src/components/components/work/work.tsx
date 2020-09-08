import React from "react";
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
}: WorkProps) {
  return (
    <a href={link}>
      <div className="work">
        <ProjectContainer>
          <TitleProject label={label} />
          <ProjectItemLeft>
            <ParagraphRotated client={client} year={year} />
          </ProjectItemLeft>
          <ProjectItem>
            <ProjectImage alt={alt} src={src} />
          </ProjectItem>
          <ProjectItemRight>
            <ProjectDivider title={title} hoverTitle={hoverTitle} />
          </ProjectItemRight>
        </ProjectContainer>
      </div>
    </a>
  );
}
