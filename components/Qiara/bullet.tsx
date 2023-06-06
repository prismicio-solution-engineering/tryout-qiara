import classNames from 'classnames'
import { ReactNode } from 'react'

export const Bullet = ({
  active,
  size = 'small',
  className,
  activeColor = 'purple-haze',
  activeIcon,
  testId,
}: {
  active?: boolean
  size?: 'small' | 'middle'
  className?: string
  activeColor?: 'purple-haze' | 'success' | 'neutral' | 'error'
  activeIcon?: ReactNode
  testId?: string
}) => (
  <div
    data-test-id={testId}
    className={classNames(
      'rounded-2xl flex items-center justify-center text-neutral-100 ' +
        'text-transparent md:text-neutral-100',
      size === 'small'
        ? 'w-4 h-4 p-2 text-xss'
        : 'p-1 mt-1 w-4 h-4 md:mt-0 md:w-6 md:h-6',
      {
        'bg-purple-haze': active && activeColor === 'purple-haze',
        'bg-success': active && activeColor === 'success',
        'bg-error': active && activeColor === 'error',
        'bg-neutral-400': !active || activeColor === 'neutral',
      },
      active ? 'active checked' : 'inactive unchecked',
      className
    )}>
    
  </div>
)
