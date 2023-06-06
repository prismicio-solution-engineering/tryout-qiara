import { ReactNode } from 'react'
import { Section } from '../../layout/block/section'
import { Heading } from '../../layout/block/heading'

export const SalesPitchSection = ({
  title,
  description,
  caption,
  bgImage,
  children,
}: {
  title: ReactNode
  description: ReactNode
  caption?: ReactNode
  bgImage: ReactNode
  children?: ReactNode
}) => (
  <Section className="items-center">
    <Heading level={2} description={description} className="text-center">
      {title}
    </Heading>
    <div className="flex flex-col gap-6 md:gap-6 max-w-4xl w-full">
      <div className="relative overflow-hidden rounded-4xl w-full min-h-[220px] md:min-h-[360px] isolate bg-gradient-to-tr from-purple-haze-bl/10 to-purple-haze-tr/10">
        {bgImage}
      </div>
      {caption && (
        <div className="text-center text-lg text-bold">{caption}</div>
      )}
    </div>
    {children}
  </Section>
)
