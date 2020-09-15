//
// Link component
//

// Imports
import React from "react";
import { MemoryRouter } from "react-router";
import Link, { LinkProps } from "./link";

// Story
export default {
  component: Link,
  title: "Components/Link",
};

// Story versions
// MemoryRouter included because Storybook can't show component with react router.
export const Default = (args: LinkProps) => (
  <MemoryRouter>
    <Link {...args} />
  </MemoryRouter>
);
Default.args = { label: "link", link: "" };
