import { Button } from "@/components/Qiara/buttonQiara";
import { Tile } from "@/components/Qiara/tile";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TileSection`.
 */
export type TileSectionProps = SliceComponentProps<Content.TileSectionSlice>;

/**
 * Component for "TileSection" Slices.
 */
const TileSection = ({ slice }: TileSectionProps): JSX.Element => {
  return (
    <Section>
      <Tile
        direction={slice.primary.direction ? 'right' : 'left'}
        title={slice.primary.title}
        image={slice.primary.image.url!}>
        <div className="flex flex-col items-center md:items-start gap-6">
          {slice.primary.description}
          {slice.variation === 'withCta' && <Link href={slice.primary.cta_link as string}>
            <Button type="primary" color="black">
              {slice.primary.cta_label}
            </Button>
      </Link>}
        </div>
      </Tile>
    </Section>
  );
};

export default TileSection;
