//
// Menu component
//

// Imports
import React from "react";
import { MemoryRouter } from "react-router";
import Menu, { MenuItem, MenuItemDark, MenuItemProps, MenuProps } from "./menu";

// Story
export default {
  component: Menu,
  title: "Components/Menu",
};

// MemoryRouter included because Storybook can't show component with react router.
// Story versions
const MenuItemPart = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItem {...args} />
  </MemoryRouter>
);
MenuItemPart.args = { label: "menuitem", link: "" };

export const Default = (args: MenuProps) => <Menu {...args} />;
Default.args = { children: MenuItemPart };

export const Item = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItem {...args} />
  </MemoryRouter>
);
Item.args = { label: "menuitem", link: "" };

export const Dark = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItemDark {...args} />
  </MemoryRouter>
);
Dark.args = {
  label: "menuitemdark",
  link: "",
};
