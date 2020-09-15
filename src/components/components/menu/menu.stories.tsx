//
// Menu component
//

// Imports
import React from "react";
import { MemoryRouter } from "react-router";
import Menu, { MenuProps } from "./menu";
import MenuItem, { MenuItemProps } from "../menuItem/menuItem";

// Story
export default {
  component: Menu,
  title: "Components/Menu",
};

// Story versions
const MenuItemPart = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItem {...args} />
  </MemoryRouter>
);
MenuItemPart.args = { label: "menuitem", link: "" };

export const Default = (args: MenuProps) => <Menu {...args} />;
Default.args = { children: MenuItemPart };
