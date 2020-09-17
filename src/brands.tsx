import React from "react";
import Fade from "react-reveal/Fade";

import Menu, { MenuItemDark } from "./components/components/menu/menu";
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
import Image, { ImageHeader } from "./components/components/image/image";
import { TitleProjectDetail } from "./components/components/title/title";
import img01 from "./images/intersport/intersport_brands_iphone.png";
import img02 from "./images/intersport/intersport_brands_mac.png";
import brandsHeader from "./images/intersport/intersport_brands_header.png";
import Section from "./components/components/section/section";
import Link from "./components/components/link/link";

function Brands() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <ImageHeader src={brandsHeader} alt="Test" />
      <TitleProjectDetail label="Brands" />
      <Container>
        <Column>
          <Fade bottom>
            <Divider title="The Challange" />
            <Row>
              <ItemSmall>
                <DividerNoBorder title="Client" />
                <Link label="Intersport" link="https://www.intersport.se/" />
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="2020"></ParagraphSmall>
                <DividerNoBorder title="Role" />
                <ParagraphSmall text="Front-end development"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <ParagraphRight text="Being part of the international sports trade chain Intersport I got the task to remake the brand's page. The page is meant to show the customer all the available brands and the customer should be able to click to show the corresponding products. The design of the page was pre-made but I had the opportunity to add small features to enhance the UX." />
              </ItemBig>
            </Row>
            <Section
              title="The Process"
              text="Working with the pre-made designs using React, Typescript, and Storybook to complete a component with the help of Visual Studio Code."
            />
            <Section
              title="The Result"
              text="A brand's page with a new design that works smoothly on different devices. With the help of a fixed alphabetic menu, you can scroll between the different brands that Intersport offers."
            />
            <Image src={img01} alt="Test" />
            <Image src={img02} alt="Test" />
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default Brands;
