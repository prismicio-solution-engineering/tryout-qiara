import { ReactNode, useMemo } from 'react'
import classNames from 'classnames'

export const HeadingTitle = ({
  className,
  level,
  children,
}: {
  className: string
  level: number
  children: ReactNode
}) => (
  <>
    {level === 1 && (
      <h1 className={classNames(className, 'text-3xl md:text-4xl lg:text-5xl')}>
        {children}
      </h1>
    )}
    {level === 2 && (
      <h2 className={classNames(className, 'text-2xl md:text-3xl')}>
        {children}
      </h2>
    )}
    {level === 3 && (
      <h3 className={classNames(className, 'text-xl md:text-2xl')}>
        {children}
      </h3>
    )}
    {level === 4 && (
      <h4 className={classNames(className, 'text-lg md:text-xl')}>
        {children}
      </h4>
    )}
    {level === 5 && (
      <h5 className={classNames(className, 'text-md md:text-lg')}>
        {children}
      </h5>
    )}
  </>
)

export type HeadingProps = {
  description?: ReactNode
  callToAction?: ReactNode
  darkMode?: boolean
  level?: number
  children?: ReactNode
  className?: string
  titleClassName?: string
}

export const Heading = ({
  description,
  callToAction,
  darkMode,
  level = 1,
  children,
  className,
  titleClassName,
}: HeadingProps) => {
  const headingClassName = useMemo(
    () =>
      classNames(titleClassName, 'font-medium p-0 m-0', {
        'text-neutral-100': darkMode,
      }),
    [darkMode, titleClassName]
  )
  if (!children) {
    return null
  }
  return (
    <div className={classNames('flex flex-col gap-6', className)}>
      <HeadingTitle level={level} className={headingClassName}>
        {children}
      </HeadingTitle>
      {description && (
        <div className={darkMode ? 'text-neutral-100' : 'text-neutral-700'}>
          {description}
        </div>
      )}
      {callToAction}
    </div>
  )
}
