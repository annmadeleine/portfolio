import React from "react";
import Info from "./info";
import Intersport from "./intersport";
import StenaLine from "./stenaline";
import Wipcore from "./wipcore";
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
import stenalineImg from "./images/stenaline/stenaline_work.png";
import wipcoreImg from "./images/wipcore/wipcore_work.png";
import IconArrowDown from "./components/components/icon/icon";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/intersport" component={Intersport} />
          <Route path="/stenaline" component={StenaLine} />
          <Route path="/wipcore" component={Wipcore} />
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
        link="/stenaline"
        label="Stena Line"
        client="Stena Line"
        year="2026"
        src={stenalineImg}
        alt="Iphone with Stena Line page."
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
      <Work
        link="/intersport"
        label="Intersport"
        client="Intersport"
        year="2020"
        src={brandsImg}
        alt="Iphone with Intersports page."
        title="03"
      />
      <Work
        link="/wipcore"
        label="Wipcore"
        client="Wipcore"
        year="2019"
        src={wipcoreImg}
        alt="Iphone with Wipcore page."
        title="04"
      />
    </Reveal>
  </div>
);
