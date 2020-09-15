//
// Background story
//

// Imports
import React from "react";
import Background, { BackgroundDark } from "./background";

// Story
export default {
  component: Background,
  title: "Components/Background",
};

// Story versions
export const Default = () => <Background />;
export const Dark = () => <BackgroundDark />;
