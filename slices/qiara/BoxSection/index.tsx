// @ts-nocheck
import { IconSVG } from "@/components/IconSVG";
import { Box } from "@/components/Qiara/box";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BoxSection`.
 */
export type BoxSectionProps = SliceComponentProps<Content.BoxSectionSlice>;

/**
 * Component for "BoxSection" Slices.
 */
const BoxSection = ({ slice }: BoxSectionProps): JSX.Element => {
  return (
    <Section className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
      {slice.items.map(({ title, description, icon }) => {
        console.log(icon)
        return (
          <>
          <Box
            key={title}
            //{...(icon && { icon: <IconSVG src={icon.url} size="md" className="mb-6" /> })}
            title={title}
            className="relative lg:[&:not(:last-child)]:after:absolute after:block lg:after:-right-12 after:top-0 after:bottom-0 after:border-l after:border-solid before:border-neutral-500"
          >
            {description}
          </Box>
          <IconSVG src={icon.url} />
          </>
          
        );
      })}
    </Section>
  );
};

export default BoxSection;
