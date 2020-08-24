//
// Social component
//

// Imports
import React from "react";
import { MemoryRouter } from "react-router";
import Social, { SocialProps } from "./social";

export default {
  component: Social,
  title: "Components/Social",
};

// MemoryRouter included because Storybook can't show component with react router.

export const Default = (args: SocialProps) => (
  <MemoryRouter>
    <Social {...args} />
  </MemoryRouter>
);
Default.args = { label: "social", link: "" };
