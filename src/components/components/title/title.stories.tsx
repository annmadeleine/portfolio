//
// Title story
//

// Imports
import React from "react";
import Title, {
  TitleProps,
  TitleDark,
  TitleTransparent,
  TitleProject,
} from "./title";

// Story
export default {
  component: Title,
  title: "Components/Title",
};

// Story versions
export const Default = (args: TitleProps) => <Title {...args} />;
Default.args = { labelUp: "Creative", labelDown: "Developer" };

export const Dark = (args: TitleProps) => <TitleDark {...args} />;
Dark.args = { labelUp: "Creative", labelDown: "Developer" };

export const Transparent = (args: TitleProps) => <TitleTransparent {...args} />;
Transparent.args = { label: "Creative" };

export const Project = (args: TitleProps) => <TitleProject {...args} />;
Project.args = { label: "Project", number: "01" };
