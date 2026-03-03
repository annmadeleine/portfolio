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
                <Link label="Stena Line" link="https://stenaline.com/media/stories/ai-assisted-vessels/" />
                <DividerNoBorder title="Year" />
                <ParagraphSmall text="2026"></ParagraphSmall>
                <DividerNoBorder title="Role" />
                <ParagraphSmall text="Front-end development"></ParagraphSmall>
              </ItemSmall>
              <ItemBig>
                <DividerNoBorderHidden title="Info" />
                <ParagraphRight text="Designing and building UX and front-end features for Stena Voyage Optimisation in close collaboration with vessel crew to boost vessel performance." />
              </ItemBig>
            </Row>
            <Section
              title="The Experience"
              text="I am currently working on the Stena Voyage Optimisation project, focusing on UX design and front-end development. I primarily work with Figma, React, and Redux to design and implement intuitive user interfaces, collaborating directly with vessel crew to create a UX that works seamlessly in a nautical environment. In addition, I have contributed to Stena Weather Service, which provides weather data to Voyage Optimisation, helping ensure the app integrates accurate and actionable environmental information."
            />
            <Section
              title="The Result"
              text="Stena Voyage Optimisation is an AI-powered tool that supports captains and crew in optimising fuel usage and reducing CO₂ emissions across the Stena Line fleet. By combining AI, nautical expertise, and sensor data, the system provides actionable insights that improve vessel performance and create measurable environmental and operational impact."
            />
          </Fade>
        </Column>
      </Container>
    </div>
  );
}

export default StenaLine;
