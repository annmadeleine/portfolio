//
// Paragraph component
//

// Imports
import React from "react";
import Paragraph, { ParagraphProps, ParagraphRight } from "./paragraph";

export default {
  component: Paragraph,
  title: "Components/Paragraph",
};

export const Default = (args: ParagraphProps) => <Paragraph {...args} />;
Default.args = {
  text:
    "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. ",
};

export const Right = (args: ParagraphProps) => <ParagraphRight {...args} />;
Right.args = {
  text:
    "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. ",
};
