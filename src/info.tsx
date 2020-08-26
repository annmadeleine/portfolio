import React from "react";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import { BackgroundDark } from "./components/components/background/background";
import Name from "./components/components/name/name";
import Paragraph from "./components/components/paragraph/paragraph";
import Container, {
  ItemBig,
  ItemSmall,
} from "./components/components/container/container";
import Divider from "./components/components/divider/divider";
import Image from "./components/components/image/image";
import logo from "./images/test.png";
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
        <ItemSmall>
          <Image src={logo} alt="Test" />
        </ItemSmall>
        <ItemBig>
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
        </ItemBig>
      </Container>
    </div>
  );
}

export default Info;
