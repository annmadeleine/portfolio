//
// Container component
//

// Imports
import React from "react";

import Container, {
  OneContainer,
  ContainerProps,
  TwoContainer,
} from "./container";
import Paragraph from "../paragraph/paragraph";

export default {
  component: Container,
  title: "Components/Container",
};

export const Default = (args: ContainerProps) => <Container {...args} />;
Default.args = { children: Paragraph };

export const One = (args: ContainerProps) => <OneContainer {...args} />;
One.args = { children: Paragraph };

export const Two = (args: ContainerProps) => <TwoContainer {...args} />;
Two.args = { children: Paragraph };
