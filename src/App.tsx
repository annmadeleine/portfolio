import React from "react";
import Info from "./info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuItem from "./components/components/menuItem/menuItem";
import Background from "./components/components/background/background";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
        </Switch>
        <Background />
        <MenuItem link="/info" label="info"></MenuItem>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
