import { Box } from "@/components/Qiara/box";
import { Divider } from "@/components/Qiara/divider";
import { Heading } from "@/layout/block/heading";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import appMobileSrc from '@/public/assets/MobileAppSection/landing-app-mobile.png'

/**
 * Props for `MobileAppSection`.
 */
export type MobileAppSectionProps =
  SliceComponentProps<Content.MobileAppSectionSlice>;

/**
 * Component for "MobileAppSection" Slices.
 */
const MobileAppSection = ({ slice }: MobileAppSectionProps): JSX.Element => {
  return (
    <Section>
    <Heading
      level={2}
      className="text-center"
      description={slice.primary.description}>
      {slice.primary.title}
    </Heading>
    <div className="flex flex-col items-center gap-6 md:grid grid-cols-3">
      <div className="flex flex-col justify-center gap-6 md:gap-12 sm:max-w-xs">
        {slice.items.slice(0, 2).map((item, index) => (
          <>
            <Box
              key={item as any}
              //icon={<ShieldCheck />}
              title={item.card_title}>
              {item.card_description}
            </Box>
            {index === 0 && (<Divider noMargins className="hidden md:block" />)}
          </>
        ))}
      </div>
      <div className="text-center">
        <Image
          alt="App mobile"
          style={{ objectFit: 'scale-down', maxHeight: '680px' }}
          src={appMobileSrc}
        />
      </div>
      <div className="flex flex-col justify-center justify-self-end gap-6 md:gap-12 sm:max-w-xs">
      {slice.items.slice(2, 4).map((item, index) => (
          <>
            <Box
              key={item as any}
              //icon={<ShieldCheck />}
              title={item.card_title}>
              {item.card_description}
            </Box>
            {index === 0 && (<Divider noMargins className="hidden md:block" />)}
          </>
        ))}
      </div>
    </div>
  </Section>
  );
};

export default MobileAppSection;
