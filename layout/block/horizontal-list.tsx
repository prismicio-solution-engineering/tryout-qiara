import classNames from 'classnames'
import { ReactNode } from 'react'

export const HorizontalList = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={classNames(
      className,
      'flex gap-8 flex-nowrap items-start overflow-x-auto overflow-y-visible xl:px-[calc((100vw-1280px)/2)] pb-8 px-6'
    )}>
    {children}
  </div>
)
