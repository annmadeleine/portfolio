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
import Image, { ImageHeader } from "./components/components/image/image";
import { TitleProjectDetail } from "./components/components/title/title";
import img01 from "./images/portfolio/portfolio_iphone.png";
import img02 from "./images/portfolio/portfolio_mac.png";
import portfolioHeader from "./images/portfolio/portfolio_header.png";
import Section from "./components/components/section/section";
import Link from "./components/components/link/link";

function Portfolio() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <ImageHeader src={portfolioHeader} alt="Test" />
      <TitleProjectDetail label="Portfolio" />
      <Container>
        <Column>
          <Fade bottom>
            <Divider title="The Challange" />
            <Row>
              <ItemSmall>
                <DividerNoBorder title="Client" />
                <Link
                  label="Ann Madeleine"
                  link="https://www.annmadeleine.se/"
                />
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="2020"></ParagraphSmall>
                <DividerNoBorder title="Role" />
                <ParagraphSmall text="Design and Front-end development"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <DividerNoBorderHidden title="Info" />
                <ParagraphRight text="A website to showcase my work as well as challenge myself to create and learn as a creative developer." />
              </ItemBig>
            </Row>
            <Section
              title="The Process"
              text="My portfolio is built with the help of React and Typescript in Visual Studio Code. Components were created in Storybook with the help of SCSS and BEM. The design and images, edited with the help of Adobe XD, Adobe Photoshop, and Adobe Illustrator. "
            />
            <Section
              title="The Result"
              text="A portfolio where I can show my work and challenge myself to code new components. "
            />
            <Image src={img01} alt="Test" />
            <Image src={img02} alt="Test" />
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default Portfolio;
