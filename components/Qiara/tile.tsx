import Image from 'next/image'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { Heading } from '@/layout/block/heading'

export const Tile = function Tile({
  direction = 'left',
  image,
  title,
  description,
  children,
}: {
  direction?: string
  image?: string
  title?: string | ReactNode
  description?: string | ReactNode
  children?: string | ReactNode
}) {
  return (
    <div
      className={classNames(
        'flex w-full',
        direction === 'left'
          ? 'flex-col md:flex-row'
          : 'flex-col md:flex-row-reverse'
      )}>
      <div className="md:w-1/2 relative overflow-hidden h-80 md:h-[400px] w-full md:max-w-80 lg:max-w-[640px] rounded-3xl bg-neutral-300">
        {image && (
          <Image
            fill
            src={image}
            alt={typeof title === 'string' ? title : ''}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      <div
        className={classNames(
          'md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 gap-6',
          direction === 'left' ? 'md:pl-12' : 'md:pr-12'
        )}>
        {title && (
          <Heading
            level={2}
            className="text-center md:text-left"
            description={description}>
            {title}
          </Heading>
        )}
        {children}
      </div>
    </div>
  )
}
