import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next"

export const Icon = ({field, ...props}: PrismicNextImageProps) => {
    return (
        <PrismicNextImage field={field} {...props} height={24} width={24} style={{objectFit: "fill", maxHeight: 24}} />
    )
}