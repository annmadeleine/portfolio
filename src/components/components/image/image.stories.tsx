//
// Image component
//

// Imports
import React from "react";

import Image, { ImageProps } from "./image";
import Paragraph from "../paragraph/paragraph";

export default {
  component: Image,
  title: "Components/Image",
};

export const Default = (args: ImageProps) => <Image {...args} />;
Default.args = { src: "", alt: "" };

export const Header = (args: ImageProps) => <Image {...args} />;
Header.args = { src: "", alt: "" };
