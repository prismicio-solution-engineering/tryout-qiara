import { Carrousel } from "@/components/Qiara/carrousel";
import { Heading } from "@/layout/block/heading";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import trustPilotSrc from "@/public/assets/Carousel/trust-pilot.svg";
import Image from "next/image";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  return (
    <Section noStyle>
      {slice.variation === "default" ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <Heading level={3}>{slice.primary.titre_trustpilot}</Heading>
          <a
            className="flex flex-col gap-2 items-center"
            href="https://fr.trustpilot.com/review/qiara.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Trust Pilot"
              src={trustPilotSrc}
              width={250}
              height={40}
            />
            {slice.primary.note_trustpilot}
          </a>
        </div>
      ) : (
        <Heading
          level={2}
          className="px-6 text-center"
          description={slice.primary.description}
        >
          {slice.primary.title}
        </Heading>
      )}

      <Carrousel>
        {slice.variation === "default"
          ? slice.items.map(({ full_name, title, description }, i) => (
              <Carrousel.Item key={i} className="flex flex-col gap-4 p-10">
                <div className="flex flex-row gap-4 items-center font-medium">
                  <div className="w-14 h-14 rounded-4xl bg-purple-haze flex items-center justify-center text-neutral-100 text-lg shrink-0">
                    {full_name!
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n.substring(0, 1))
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {full_name}
                  </div>
                </div>
                <div className="text-neutral-700 max-h-48 overflow-hidden">
                  {title && (
                    <div className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {title}
                    </div>
                  )}
                  <div className="overflow-ellipsis">{description}</div>
                </div>
              </Carrousel.Item>
            ))
          : slice.items.map(({ image, title, link }, i) => (
              <Carrousel.Item key={i} className="p-8">
                <div className="relative [&:not(:last-child)]:after:absolute after:block after:-right-12 after:top-0 after:bottom-0 after:border-l after:border-solid before:border-neutral-500">
                  <div className="w-52 transition-all flex flex-col gap-3">
                    <div className="flex items-start">
                      <Image
                        alt={image.alt!}
                        src={image.url!}
                        width={image.dimensions?.width}
                        height={image.dimensions?.height}
                      />
                    </div>
                    {title}
                  </div>
                </div>
              </Carrousel.Item>
            ))}
      </Carrousel>
    </Section>
  );
};

export default Carousel;
