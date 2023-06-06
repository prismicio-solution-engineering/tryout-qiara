import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SalesPitchSection as SalesPitch } from "@/components/Qiara/sales-pitch-section";
import Image from "next/image";
import { Box } from "@/components/Qiara/box";
import classNames from "classnames";

/**
 * Props for `SalesPitchSection`.
 */
export type SalesPitchSectionProps =
  SliceComponentProps<Content.SalesPitchSectionSlice>;

/**
 * Component for "SalesPitchSection" Slices.
 */
const SalesPitchSection = ({ slice }: SalesPitchSectionProps): JSX.Element => {
  return (
    <SalesPitch
      description={slice.primary.description}
      title={slice.primary.title}
      bgImage={
        <Image src={slice.primary.image.url!} alt={slice.primary.image.alt!} className={'pointer-events-none -z-1'}
        fill
        style={{ objectFit: 'cover' }} />
      }
      caption={slice.primary.caption}
    >
      {slice.variation === "default" && (
        <div className="flex flex-col md:flex-row gap-12 max-w-4xl">
          {slice.items.map((item, index) => (
            <>
              <Box
                key={index}
                className="flex-[1_1_0]"
                
                title={item.title}
              >
                {item.description}
              </Box>
              {index === 0 && (
                <div className="hidden md:flex w-0 border-l border-neutral-300" />
              )}
            </>
          ))}
        </div>
      )}
    </SalesPitch>
  );
};

export default SalesPitchSection;