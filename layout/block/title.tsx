import { ReactNode } from 'react'
import classNames from 'classnames'

export const Title = ({
  description,
  darkMode,
  className,
  children = null,
}: {
  description?: ReactNode
  darkMode?: boolean
  className?: string
  children?: ReactNode
}) => (
  <div
    className={classNames(
      'flex flex-col items-center gap-4 justify-center text-center',
      className
    )}
  >
    <h2
      className={classNames('text-2xl font-medium p-0 m-0 text-center', {
        'text-neutral-100': darkMode,
      })}
    >
      {children}
    </h2>
    {description && (
      <div
        className={classNames(
          'text-sm text-center',
          darkMode ? 'text-neutral-100' : 'text-neutral-900'
        )}
      >
        {description}
      </div>
    )}
  </div>
)
