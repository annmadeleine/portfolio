//
// Button component
//

// Imports
import React from "react";
import Button, { ButtonProps } from "./button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Default = (args: ButtonProps) => <Button {...args} />;
Default.args = { label: "Button", disabled: false };
