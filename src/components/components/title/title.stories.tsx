//
// Button component
//

// Imports
import React from "react";
import Title, { TitleProps, TitleDark, TitleTransparent } from "./title";

export default {
  component: Title,
  title: "Components/Title",
};

export const Default = (args: TitleProps) => <Title {...args} />;
Default.args = { labelUp: "Creative", labelDown: "Developer" };

export const Dark = (args: TitleProps) => <TitleDark {...args} />;
Dark.args = { labelUp: "Creative", labelDown: "Developer" };

export const Transparent = (args: TitleProps) => <TitleTransparent {...args} />;
Transparent.args = { label: "Creative" };