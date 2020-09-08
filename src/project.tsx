import React from "react";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import Name from "./components/components/name/name";
import { BackgroundDark } from "./components/components/background/background";
import Divider, {
  DividerNoBorder,
} from "./components/components/divider/divider";
import Paragraph, {
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

function Project() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/" label="home"></MenuItemDark>
        <Name label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <HeaderImage src={img} alt="Test" />
      <TitleProjectDetail label="Branding" />
      <Container>
        <Column>
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
          <Divider title="The Process" />
          <Paragraph text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
          <Divider title="The Result" />
          <Paragraph text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
          <Image src={img} alt="Test" />
          <Image src={img} alt="Test" />
          <Image src={img} alt="Test" />
        </Column>
      </Container>
    </div>
  );
}

export default Project;
