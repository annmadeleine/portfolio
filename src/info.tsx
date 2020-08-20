import React from "react";

import Menu from "./components/components/menu/menu";
import { MenuItemDark } from "./components/components/menuItem/menuItem";
import { BackgroundDark } from "./components/components/background/background";

function Info() {
  return (
    <div className="Info">
      <BackgroundDark />
      <Menu>
        <MenuItemDark link="/" label="home"></MenuItemDark>
        <MenuItemDark link="/info" label="info"></MenuItemDark>
      </Menu>
    </div>
  );
}

export default Info;
