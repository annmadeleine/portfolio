//
// Divider story
//

// Imports
import React from "react";
import Divider, {
  DividerProps,
  DividerNoBorder,
  ProjectDivider,
} from "./divider";

// Story
export default {
  component: Divider,
  title: "Components/Divider",
};

// Story versions
export const Default = (args: DividerProps) => <Divider {...args} />;
Default.args = { title: "the content" };

export const NoBorder = (args: DividerProps) => <DividerNoBorder {...args} />;
NoBorder.args = { title: "the content" };

export const Project = (args: DividerProps) => <ProjectDivider {...args} />;
Project.args = { title: "01", hoverTitle: "Explore" };
