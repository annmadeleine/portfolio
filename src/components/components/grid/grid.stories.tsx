//
// Grid component
//

// Imports
import React from "react";

import Grid, { GridProps } from "./grid";
import Paragraph from "../paragraph/paragraph";

export default {
  component: Grid,
  title: "Components/Grid",
};

export const Default = (args: GridProps) => <Grid {...args} />;
Default.args = { children: Paragraph };
