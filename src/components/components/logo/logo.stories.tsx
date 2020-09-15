//
// Logo story
//

// Imports
import React from "react";
import Logo, { LogoWhite } from "./logo";

// Story
export default {
  component: Logo,
  title: "Components/Logo",
};

// Story versions
export const Default = () => <Logo />;

export const White = () => <LogoWhite />;
