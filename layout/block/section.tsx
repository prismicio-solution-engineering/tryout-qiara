import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

export const Section = forwardRef(function Section(
  {
    noStyle,
    style,
    className,
    children,
  }: {
    noStyle?: boolean
    style?: CSSProperties
    className?: string
    children: ReactNode
  },
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <section
      ref={ref}
      style={style}
      className={classNames(
        'w-full flex flex-col gap-12',
        { 'max-w-[83rem] px-6': !noStyle },
        className
      )}>
      {children}
    </section>
  )
})
