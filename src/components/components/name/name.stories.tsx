//
// Name story
//

// Imports
import React from "react";
import Name, { NameProps, NameLight } from "./name";

// Story
export default {
  component: Name,
  title: "Components/Name",
};

// Name versions
export const Default = (args: NameProps) => <Name {...args} />;
Default.args = { label: "Ann Madeleine" };

export const Light = (args: NameProps) => <NameLight {...args} />;
Default.args = { label: "Ann Madeleine" };
