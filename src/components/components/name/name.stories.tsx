//
// Button component
//

// Imports
import React from "react";
import Name, { NameProps } from "./name";

export default {
  component: Name,
  title: "Components/Name",
};

export const Default = (args: NameProps) => <Name {...args} />;
Default.args = { label: "Ann Madeleine" };
