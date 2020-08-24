//
// Button component
//

// Imports
import React from "react";
import Name, { NameProps, NameTitle } from "./name";

export default {
  component: Name,
  title: "Components/Name",
};

export const Default = (args: NameProps) => <Name {...args} />;
Default.args = { label: "Ann Madeleine" };

export const Title = (args: NameProps) => <NameTitle {...args} />;
Default.args = { label: "Ann Madeleine" };
