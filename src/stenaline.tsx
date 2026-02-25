import React from "react";
import Fade from "react-reveal/Fade";

import Menu, { MenuItemDark } from "./components/components/menu/menu";
import Name from "./components/components/name/name";
import { BackgroundDark } from "./components/components/background/background";
import Divider, {
  DividerNoBorder,
  DividerNoBorderHidden,
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
import { TitleProjectDetail } from "./components/components/title/title";
import Section from "./components/components/section/section";
import Link from "./components/components/link/link";

function StenaLine() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <TitleProjectDetail label="Stena Line" />
      <Container>
        <Column>
          <Fade bottom>
            <Divider title="Overview" />
            <Row>
              <ItemSmall>
                <DividerNoBorder title="Client" />
                <Link label="Stena Line" link="https://www.stenaline.com/" />
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="2026"></ParagraphSmall>
                <DividerNoBorder title="Role" />
                <ParagraphSmall text="Front-end development"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <DividerNoBorderHidden title="Info" />
                <ParagraphRight text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo." />
              </ItemBig>
            </Row>
            <Section
              title="The Process"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
            />
            <Section
              title="The Result"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
            />
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default StenaLine;
