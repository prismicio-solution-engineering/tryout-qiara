// @ts-nocheck
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SalesPitchSection as SalesPitch } from "@/components/Qiara/sales-pitch-section";
import Image from "next/image";
import { Box } from "@/components/Qiara/box";
import { AutoPlayVideo } from "@/components/Qiara/auto-play-video";
import { Icon } from "@/components/Icon";

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
        slice.primary.video_link ? (
          <AutoPlayVideo src={slice.primary.video_link} />
        ) : (
          <Image
            src={slice.primary.image.url!}
            alt={slice.primary.image.alt!}
            className={"pointer-events-none -z-1"}
            fill
            style={{ objectFit: "cover" }}
          />
        )
      }
      caption={slice.primary.caption}
    >
      {slice.variation === "default" ||
        (slice.variation === "withVideo" && (
          <div className="flex flex-col md:flex-row gap-12 max-w-4xl">
            {slice.items.map((item, index) => (
              <>
                <Box
                  key={index}
                  className="flex-[1_1_0]"
                  title={item.title}
                  icon={
                    <Icon
                      field={item.icon}
                    />
                  }
                >
                  {item.description}
                </Box>
                {index === 0 && (
                  <div className="hidden md:flex w-0 border-l border-neutral-300" />
                )}
              </>
            ))}
          </div>
        ))}
    </SalesPitch>
  );
};

export default SalesPitchSection;
