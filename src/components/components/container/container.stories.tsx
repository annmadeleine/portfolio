//
// Container component
//

// Imports
import React from "react";

import Container, { ContainerProps, ItemSmall, ItemBig } from "./container";
import Paragraph from "../paragraph/paragraph";

export default {
  component: Container,
  title: "Components/Container",
};

export const Default = (args: ContainerProps) => <Container {...args} />;
Default.args = { children: Paragraph };

export const Small = (args: ContainerProps) => <ItemSmall {...args} />;
Small.args = { children: Paragraph };

export const Big = (args: ContainerProps) => <ItemBig {...args} />;
Big.args = { children: Paragraph };
