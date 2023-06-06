import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeroBannerDefault from "./HeroBannerDefault";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps) => {
  console.log(slice)
    switch (slice.variation) {
      case "default":
        return <HeroBannerDefault slice={slice} />;
    }
    return <></>
};

export default HeroBanner;
