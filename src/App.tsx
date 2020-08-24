import React from "react";
import Info from "./info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Background from "./components/components/background/background";
import Menu from "./components/components/menu/menu";
import MenuItem from "./components/components/menuItem/menuItem";
import Title from "./components/components/title/title";
import { NameTitle } from "./components/components/name/name";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
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
      <MenuItem link="/info" label="info"></MenuItem>
    </Menu>
    <Title labelUp="creative" labelDown="developer" />
    <NameTitle label="Ann Madeleine" />
  </div>
);

export default App;
