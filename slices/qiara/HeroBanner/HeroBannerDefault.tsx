import { Background } from "@/layout/block/background";
import { Heading } from "@/layout/block/heading";
import { Section } from "@/layout/block/section";
import type { Content } from "@prismicio/client";
import { StaticImageData } from "next/image";
import heroSrc from '@/public/assets/HeroBanner/landing-hero.webp'
import Link from "next/link";
import { Button } from "@/components/Qiara/buttonQiara";
import { FilledLinkToWebField } from "@prismicio/types";

export default function HeroBannerDefault({
  slice,
}: {
  slice: Content.HeroBannerSliceDefault | Content.HeroBannerSliceWithButton;
}) {
  return (
    <Section
      noStyle
      className="relative h-[560px] md:h-[720px] xl:h-[800px] pt-28 px-6">
      <Background
        src={heroSrc.src}
        blurDataURL={heroSrc.blurDataURL}
        style={{
          objectPosition: 'bottom center',
          objectFit: 'cover',
        }}
        priority
      />
      <div className="relative flex flex-col gap-6 md:gap-12 max-w-5xl mx-auto text-center">
        <Heading
          level={1}
          description={
            <div className="text-neutral-700 hidden md:block">
              {slice.primary.description}
            </div>
          }>
          {slice.primary.title}
        </Heading>
        {slice.variation === "withButton" && (
          //@ts-ignore:next-line
          <Link className="self-center" href={slice.primary.cta_link?.url}>
            <Button type="primary" color={slice.primary.cta_type === "1" ? "black" : "purple-haze"} testId="order-pack" size="large">
              {slice.primary.cta_label}
            </Button>
          </Link>
        )}
      </div>
    </Section>
  );
}
