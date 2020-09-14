import React from "react";
import Fade from "react-reveal/Fade";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import { BackgroundDark } from "./components/components/background/background";
import Name from "./components/components/name/name";
import Container, {
  ItemProjectDetailSmall,
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
          <ItemProjectDetailSmall>
            <Fade bottom>
              <Section
                title="about"
                text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz."
              />
              <SectionSocial title="contact" socials={socials} />
            </Fade>
          </ItemProjectDetailSmall>
        </Row>
      </Container>
    </div>
  );
}

export default Info;
