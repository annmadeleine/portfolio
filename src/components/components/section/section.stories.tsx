//
// Section story
//

// Imports
import React from "react";
import Section, { SectionProps } from "./section";

// Story
export default {
  component: Section,
  title: "Components/Section",
};

// Section versions
export const Default = (args: SectionProps) => <Section {...args} />;
Default.args = {
  title: "Title",
  text:
    "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.",
};
