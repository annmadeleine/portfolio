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

function Wipcore() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/#work" label="work"></MenuItemDark>
        <Name link="/" label="Ann Madeleine" />
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
      <TitleProjectDetail label="Wipcore" />
      <Container>
        <Column>
          <Fade bottom>
            <Divider title="Overview" />
            <Row>
              <ItemSmall>
                <DividerNoBorder title="Client" />
                <Link label="Wipcore" link="https://www.mardigras.se" />
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="2019"></ParagraphSmall>
                <DividerNoBorder title="Role" />
                <ParagraphSmall text="Front-end development"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <DividerNoBorderHidden title="Info" />
                <ParagraphRight text="I started my career in web development at Wipcore (now Mardi Gras), working with front-end development, modern CMS platforms, and reusable components for web and e-commerce projects." />
              </ItemBig>
            </Row>
            <Section
  title="The Experience"
  text={`At Wipcore (now Mardi Gras), my main focus was front-end development as well as contributing to the company’s internal culture and well-being. \n
     I worked with several clients across different industries, including Jaktia and Doggy, participating in client meetings and developing solutions tailored to their needs. \n
     During my time there, I gained experience working with CMS platforms such as Umbraco, WordPress, and Episerver, as well as programming languages and frameworks like HTML, SCSS, PHP, JavaScript, jQuery, Vue, and Angular.  
I developed reusable components for Wipcore’s internal component library and worked on the development of the e-commerce platform Enova. \n
In addition to my technical responsibilities, I was part of a smaller internal group focused on improving the workplace environment, organizing company kick-offs, social events, and smaller gatherings.`}
/>
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default Wipcore;
