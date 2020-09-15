//
// Work story
//

// Imports
import React from "react";
import Work, { WorkProps } from "./work";

// Story
export default {
  component: Work,
  title: "Components/Work",
};

// Story versions
export const Default = (args: WorkProps) => <Work {...args} />;
Default.args = {
  client: "Client",
  year: "2020",
  src:
    "https://www.northcotevet.com.au/wp-content/uploads/2019/03/tips-puppies-jumping-barking.jpg",
  alt: "Detta är en bild",
  label: "Project",
  title: "Explore",
};
