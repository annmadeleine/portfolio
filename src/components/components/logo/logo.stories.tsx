//
// Logo component
//

// Imports
import React from "react";
import Logo, { LogoWhite } from "./logo";

export default {
  component: Logo,
  title: "Components/Logo",
};

export const Default = () => <Logo />;

export const White = () => <LogoWhite />;
