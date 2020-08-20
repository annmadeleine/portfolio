//
// MenuItem component
//

// Imports
import React from "react";
import { MemoryRouter } from "react-router";
import MenuItem, { MenuItemDark, MenuItemProps } from "./menuItem";

export default {
  component: MenuItem,
  title: "Components/MenuItem",
};

// MemoryRouter included because Storybook can't show component with react router.

export const Default = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItem {...args} />
  </MemoryRouter>
);
Default.args = { label: "menuitem", link: "" };

export const Dark = (args: MenuItemProps) => (
  <MemoryRouter>
    <MenuItemDark {...args} />
  </MemoryRouter>
);
Dark.args = {
  label: "menuitemdark",
  link: "",
};
