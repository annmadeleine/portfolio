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
  { id: 3, label: "Github", link: "https://github.com/madeleineolson" },
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
                text="Currently looking for new opportunities to work alongside passionate developers and designers. Learning and developing my skills through course sites like Udemy, with focus on React, Typescript, styled components and Storybook. Have previously worked with Wordpress, Umbraco, Vue and Angular. With a big interest in the design and UX, I have experience in several Adobe programs like Photoshop, Indesign and XD. I’ve also been testing out tools like Sketch, Figma and Invision Studio."
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
