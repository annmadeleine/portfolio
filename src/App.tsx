import React from "react";
import Info from "./info";
import Project from "./project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Background from "./components/components/background/background";
import Menu from "./components/components/menu/menu";
import MenuItem from "./components/components/menuItem/menuItem";
import Title from "./components/components/title/title";
import { NameTitle } from "./components/components/name/name";
import Logo from "./components/components/logo/logo";
import Container, {
  ItemSmall,
  ItemBig,
  Row,
} from "./components/components/container/container";
import Work from "./components/components/work/work";
import img from "./images/mockup-square.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Background />
    <Menu>
      <MenuItem link="/" label="home"></MenuItem>
      <NameTitle label="Ann Madeleine" />
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

    <Work
      link="/project"
      label="Branding"
      client="Client"
      year="2020"
      src={img}
      alt="Detta är en bild"
      title="Explore"
      hoverTitle=""
    />
    <Work
      link="/project"
      label="Title"
      client="Wow"
      year="2018"
      src={img}
      alt="Detta är en bild"
      title="Explore"
      hoverTitle=""
    />
  </div>
);

export default App;
