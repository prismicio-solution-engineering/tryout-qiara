import { CSSProperties, forwardRef, ReactNode } from 'react'
import classNames from 'classnames'

type CardProps = {
  className?: string
  darkMode?: boolean
  children?: ReactNode
  style?: CSSProperties
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, style, darkMode, children }: CardProps,
  ref
) {
  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-col justify-center items-center relative overflow-hidden rounded-4xl px-12 py-32 lg:py-48',
        darkMode ? 'text-neutral-100' : 'text-neutral-900',
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
})
