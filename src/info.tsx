import React from "react";
import Fade from "react-reveal/Fade";

import Menu, { MenuItemDark } from "./components/components/menu/menu";
import { BackgroundDark } from "./components/components/background/background";
import Name from "./components/components/name/name";
import Container, {
  ItemWorkDetailSmall,
  Row,
  ItemSmallCollapse,
} from "./components/components/container/container";
import { LogoWhite } from "./components/components/logo/logo";
import Section, {
  SectionSocial,
} from "./components/components/section/section";

const socials = [
  { id: 1, label: "Email", link: "mailto:madeleineolson@outlook.com" },
  {
    id: 2,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/madeleine-olson/",
  },
];

function Info() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <Container>
        <Row>
          <ItemSmallCollapse>
            <LogoWhite />
          </ItemSmallCollapse>
          <ItemWorkDetailSmall>
            <Fade bottom>
              <Section
                title="about"
                text={`I am currently on parental leave from my role as UX Designer and Frontend Developer at Stena Line.\n
At Stena Line, I work exclusively on an AI-assisted vessels application. In this role, I combine UX design and frontend development, primarily using React, TypeScript, and Figma. I collaborate closely with stakeholders and developers to design and build features that support daily operations onboard.
My work involves translating user needs and operational requirements into clear, usable interfaces, and ensuring that the design works well in practice once implemented.
\nPreviously, I have worked with WordPress, Umbraco, Vue, and Angular. I have a strong interest in design and UX, with experience in Adobe Photoshop, InDesign, XD, Sketch, Figma, and InVision Studio.\n
During my parental leave, I completed the course Programming in Python: Basic and Preparatory Course at Luleå University of Technology to further develop my technical skills.\n
I enjoy working at the intersection of design and development and care about building digital products that are practical, well-structured, and easy to use.`}
              />
              <SectionSocial title="contact" socials={socials} />
            </Fade>
          </ItemWorkDetailSmall>
        </Row>
      </Container>
    </div>
  );
}

export default Info;
