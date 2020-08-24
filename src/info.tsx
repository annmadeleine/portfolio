import React from "react";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import { BackgroundDark } from "./components/components/background/background";
import Name from "./components/components/name/name";
import Grid from "./components/components/grid/grid";
import Paragraph from "./components/components/paragraph/paragraph";
import Container, {
  OneContainer,
  TwoContainer,
} from "./components/components/container/container";
import Divider from "./components/components/divider/divider";
import { TitleDark } from "./components/components/title/title";
import Social from "./components/components/link/social";

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
        <OneContainer>
          <TitleDark labelUp="Creative" labelDown="Developer" />
        </OneContainer>
        <TwoContainer>
          <Divider title="01" />
          <Paragraph text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz."></Paragraph>
          <Divider title="02" />
          <Social label="Email" link="mailto:madeleineolson@outlook.com" />
          <Social
            label="LinkedIn"
            link="https://www.linkedin.com/in/madeleine-olson/"
          />
          <Social label="Github" link="https://github.com/madeleineolson" />
          <Social label="Codepen" link="https://codepen.io/madeleine-olson" />
        </TwoContainer>
      </Container>
    </div>
  );
}

export default Info;
