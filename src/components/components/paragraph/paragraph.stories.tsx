//
// Paragraph story
//

// Imports
import React from "react";
import Paragraph, {
  ParagraphProps,
  ParagraphRight,
  ParagraphSmall,
  ParagraphWork,
} from "./paragraph";

// Story
export default {
  component: Paragraph,
  title: "Components/Paragraph",
};

// Story versions
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

export const Small = (args: ParagraphProps) => <ParagraphSmall {...args} />;
Small.args = {
  text: "The quick, brown fox.",
};

export const Work = (args: ParagraphProps) => <ParagraphWork {...args} />;
Work.args = {
  client: "Client",
  year: "2020",
};
