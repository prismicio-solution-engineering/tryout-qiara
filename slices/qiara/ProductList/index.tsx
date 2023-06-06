import { InventoryItems } from "@/components/Qiara/inventory-items";
import { Heading } from "@/layout/block/heading";
import { Section } from "@/layout/block/section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductList`.
 */
export type ProductListProps = SliceComponentProps<Content.ProductListSlice>;

/**
 * Component for "ProductList" Slices.
 */
const ProductList = ({ slice }: ProductListProps): JSX.Element => {
  return (
    <Section noStyle>
    <Heading
      level={2}
      className="text-center"
      description={
        slice.primary.description
      }>
      {slice.primary.title}
    </Heading>
    <InventoryItems className="z-10" items={slice.items} />
  </Section>
  );
};

export default ProductList;
