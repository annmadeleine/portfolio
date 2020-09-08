//
// Image component
//

// Imports
import React from "react";

import Image, { ImageProps, HeaderImage, ProjectImage } from "./image";
import img from "../../../images/mockup.jpg";

export default {
  component: Image,
  title: "Components/Image",
};

export const Default = (args: ImageProps) => <Image {...args} />;
Default.args = { src: { img }, alt: "" };

export const Header = (args: ImageProps) => <HeaderImage {...args} />;
Header.args = { src: { img }, alt: "" };

export const Project = (args: ImageProps) => <ProjectImage {...args} />;
Project.args = { src: { img }, alt: "" };
