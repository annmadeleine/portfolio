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
} from "./components/components/paragraph/paragraph";
import Grid from "./components/components/grid/grid";
import Container from "./components/components/container/container";
import Image, { Header } from "./components/components/image/image";
import { TitleProject } from "./components/components/title/title";

function Project() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/" label="home"></MenuItemDark>
        <Name label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <Header
        src="https://pixabay.com/get/57e7dd464d54ac14f6d1867dda35367b1c37dce25650704c_1920.jpg"
        alt="Test"
      />
      <TitleProject label="Project" number="01" />
      <Divider title="The Challange" />
      <Container>
        <Grid>
          <DividerNoBorder title="Client" />
          <Paragraph text="Company"></Paragraph>
          <DividerNoBorder title="Year" />
          <Paragraph text="Year"></Paragraph>
          <DividerNoBorder title="Services" />
          <Paragraph text="Service"></Paragraph>
        </Grid>
        <ParagraphRight text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
      </Container>
      <Divider title="The Process" />
      <Paragraph text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
      <Divider title="The Result" />
      <ParagraphRight text="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz." />
      <Image
        src="https://pixabay.com/get/57e7dd464d54ac14f6d1867dda35367b1c37dce25650704c_1920.jpg"
        alt="Test"
      />
      <Image
        src="https://pixabay.com/get/57e7dd464d54ac14f6d1867dda35367b1c37dce25650704c_1920.jpg"
        alt="Test"
      />
      <Image
        src="https://pixabay.com/get/57e7dd464d54ac14f6d1867dda35367b1c37dce25650704c_1920.jpg"
        alt="Test"
      />
    </div>
  );
}

export default Project;
