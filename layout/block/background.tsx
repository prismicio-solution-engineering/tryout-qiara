import { ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'

export const Background = forwardRef(function Background(
  {
    className,
    children,
    ...props
  }: {
    children?: ReactNode
  } & Omit<ImageProps, 'alt'>,
  ref: ForwardedRef<HTMLImageElement>
) {
  return (
    <Image
      ref={ref}
      className={classNames('pointer-events-none -z-1', className)}
      fill
      style={{ objectFit: 'cover' }}
      alt=""
      {...props}
    />
  )
})
