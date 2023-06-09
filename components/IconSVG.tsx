import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";
import SVG from "react-inlinesvg";

type IconProps = {
  className?: string;
  src: string;
  size?: VariantProps<typeof iconStyles>["size"];
  color?: VariantProps<typeof iconStyles>["color"];
};

const iconStyles = cva("", {
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    },
    color: {
      orange: "text-primary-orange",
      pink: "text-primary-pink",
      green: "text-primary-green",
      purple: "text-primary-purple",
      blue: "text-primary-blue",
    },
  },
  defaultVariants: {
    size: "md",
    color: "orange",
  },
});

export const IconSVG = ({ className, src, size, color }: IconProps) => (
  <SVG className={cx(iconStyles({ size, color }), className)} src={src} />
);