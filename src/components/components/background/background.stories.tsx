//
// Button component
//

// Imports
import React from "react";
import Background, { BackgroundDark } from "./background";

export default {
  component: Background,
  title: "Components/Background",
};

export const Default = () => <Background />;
export const Dark = () => <BackgroundDark />;
