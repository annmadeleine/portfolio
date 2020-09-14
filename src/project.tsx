import React from "react";
import Fade from "react-reveal/Fade";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import Name from "./components/components/name/name";
import { BackgroundDark } from "./components/components/background/background";
import Divider, {
  DividerNoBorder,
} from "./components/components/divider/divider";
import {
  ParagraphRight,
  ParagraphSmall,
} from "./components/components/paragraph/paragraph";
import Container, {
  Column,
  ItemBig,
  ItemSmall,
  Row,
} from "./components/components/container/container";
import Image, { HeaderImage } from "./components/components/image/image";
import { TitleProjectDetail } from "./components/components/title/title";
import img from "./images/mockup.jpg";
import Section from "./components/components/section/section";

function Project() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <HeaderImage src={img} alt="Test" />
      <TitleProjectDetail label="Branding" />
      <Container>
        <Column>
          <Fade bottom>
            <Divider title="The Challange" />
            <Row>
              <ItemSmall>
                <DividerNoBorder title="Client" />
                <ParagraphSmall text="Company"></ParagraphSmall>
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="Year"></ParagraphSmall>
                <DividerNoBorder title="Services" />
                <ParagraphSmall text="Service"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <ParagraphRight text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
              </ItemBig>
            </Row>
            <Section
              title="The Process"
              text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz."
            />
            <Section
              title="The Process"
              text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz."
            />
            <Image src={img} alt="Test" />
            <Image src={img} alt="Test" />
            <Image src={img} alt="Test" />
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default Project;
