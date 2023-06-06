import { ReactNode } from 'react'
import classNames from 'classnames'
import { Heading } from '@/layout/block/heading'

export const Box = ({
  title,
  children,
  description,
  icon,
  className,
}: {
  title: ReactNode
  children?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  className?: string
}) => (
  <div
    className={classNames(
      className,
      'flex flex-col gap-1 text-center items-center md:text-left md:items-start'
    )}>
    {icon && (
      <div className="text-xl mb-2 md:mb-3 inline-flex p-2 rounded-3xl bg-neutral-200">
        {icon}
      </div>
    )}
    <Heading level={5}>{title}</Heading>
    {(children ?? description) && (
      <div className="text-neutral-700 mt-1">{children ?? description}</div>
    )}
  </div>
)
