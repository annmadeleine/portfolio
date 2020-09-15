//
// Image story
//

// Imports
import React from "react";
import Image, { ImageProps, ImageHeader, ImageWork } from "./image";
import img from "../../../images/mockup.jpg";

// Story
export default {
  component: Image,
  title: "Components/Image",
};

// Story versions
export const Default = (args: ImageProps) => <Image {...args} />;
Default.args = { src: { img }, alt: "" };

export const Header = (args: ImageProps) => <ImageHeader {...args} />;
Header.args = { src: { img }, alt: "" };

export const Work = (args: ImageProps) => <ImageWork {...args} />;
Work.args = { src: { img }, alt: "" };
