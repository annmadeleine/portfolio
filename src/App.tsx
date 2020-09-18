import React from "react";
import Info from "./info";
import Brands from "./brands";
import Portfolio from "./portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Reveal from "react-reveal/Fade";

import Background from "./components/components/background/background";
import Menu, { MenuItem } from "./components/components/menu/menu";
import Title from "./components/components/title/title";
import { NameLight } from "./components/components/name/name";
import Logo from "./components/components/logo/logo";
import Container, {
  ItemSmall,
  ItemBig,
  Row,
} from "./components/components/container/container";
import Work from "./components/components/work/work";
import brandsImg from "./images/intersport/intersport_brands_work.png";
import portfolioImg from "./images/portfolio/portfolio_work.png";
import IconArrowDown from "./components/components/icon/icon";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/brands" component={Brands} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Background />
    <Menu>
      <MenuItem link="/#work" label="work"></MenuItem>
      <NameLight link="/" label="Ann Madeleine" />
      <MenuItem link="/info" label="info"></MenuItem>
    </Menu>
    <Container>
      <Row>
        <ItemSmall>
          <Logo />
        </ItemSmall>
        <ItemBig>
          <Title labelUp="creative" labelDown="developer" />
        </ItemBig>
      </Row>
    </Container>
    <IconArrowDown />
    <Reveal bottom>
      <Work
        id="work"
        link="/brands"
        label="Brands"
        client="Intersport"
        year="2020"
        src={brandsImg}
        alt="Iphone with Intersports brand page."
        title="01"
      />
      <Work
        link="/portfolio"
        label="Portfolio"
        client="Ann Madeleine"
        year="2020"
        src={portfolioImg}
        alt="Iphone with Ann Madeleine's portfolio."
        title="02"
      />
    </Reveal>
  </div>
);
