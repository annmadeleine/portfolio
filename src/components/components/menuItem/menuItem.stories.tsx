//
// MenuItem component
//

// Imports
import React from "react";
import MenuItem, { MenuItemProps } from "./menuItem";

export default {
  component: MenuItem,
  title: "Components/MenuItem",
};

export const Default = (args: MenuItemProps) => <MenuItem {...args} />;
Default.args = { label: "menuitem" };
