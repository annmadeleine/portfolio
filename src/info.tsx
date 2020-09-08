import React from "react";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import { BackgroundDark } from "./components/components/background/background";
import Name from "./components/components/name/name";
import Paragraph from "./components/components/paragraph/paragraph";
import Container, {
  ItemProjectDetailSmall,
  Row,
  ItemSmallCollapse,
} from "./components/components/container/container";
import Divider from "./components/components/divider/divider";
import Social from "./components/components/link/social";
import { LogoWhite } from "./components/components/logo/logo";

function Info() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/" label="home"></MenuItemDark>
        <Name label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <Container>
        <Row>
          <ItemSmallCollapse>
            <LogoWhite />
          </ItemSmallCollapse>
          <ItemProjectDetailSmall>
            <Divider title="about" />
            <Paragraph text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz."></Paragraph>
            <Divider title="contact" />
            <Social label="Email" link="mailto:madeleineolson@outlook.com" />
            <Social
              label="LinkedIn"
              link="https://www.linkedin.com/in/madeleine-olson/"
            />
            <Social label="Github" link="https://github.com/madeleineolson" />
            <Social label="Codepen" link="https://codepen.io/madeleine-olson" />
          </ItemProjectDetailSmall>
        </Row>
      </Container>
    </div>
  );
}

export default Info;
