import { ReactNode } from 'react'
import classNames from 'classnames'

export const Banner = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => (
  <div
    className={classNames(
      'flex flex-col items-center gap-4 justify-center py-24 md:py-32 lg:py-48 z-10',
      className
    )}
  >
    {children}
  </div>
)
