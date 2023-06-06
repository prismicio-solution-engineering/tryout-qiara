import { Bullet } from "@/components/Qiara/bullet";
import { Card } from "@/layout/block/card";
import { Heading } from "@/layout/block/heading";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WhyArray`.
 */
export type WhyArrayProps = SliceComponentProps<Content.WhyArraySlice>;

/**
 * Component for "WhyArray" Slices.
 */
const WhyArray = ({ slice }: WhyArrayProps): JSX.Element => {
  return (
    <Section>
      <Heading
        level={2}
        className="text-center"
        description={
          slice.primary.description
        }>
        {slice.primary.title}
      </Heading>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6">
        <Card className="border-2 border-neutral-400 gap-12 bg-neutral-100 text-neutral-500 w-full lg:max-w-md !py-16 justify-self-end">
          <div className="font-medium text-xl">
            {slice.primary.left_column_title}
          </div>
          <div className="flex flex-col gap-6">
            {slice.items
              .filter((item) => item.left_or_right === false)
              .map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-6 flex items-center">
                    <Bullet />
                  </div>
                  <div className="text-neutral-700">{item.description}</div>
                </div>
              ))}
          </div>
        </Card>
        <Card
          darkMode
          className="gap-12 bg-neutral-900 w-full lg:max-w-md !py-16">
          <div className="font-medium text-2xl text-purple-haze">{slice.primary.right_column_title}</div>
          <div className="flex flex-col gap-6">
          {slice.items
              .filter((item) => item.left_or_right === true)
              .map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-6 flex items-center">
                    <Bullet active/>
                  </div>
                  <div className="text-neutral-100">{item.description}</div>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default WhyArray;
