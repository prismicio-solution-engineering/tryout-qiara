import classNames from 'classnames'

export const Divider = ({
  noMargins,
  className,
}: {
  noMargins?: boolean
  className?: string
}) => (
  <hr
    className={classNames(className, 'h-0 border-t border-t-neutral-300', {
      'my-2 md:my-8': !noMargins,
    })}
  />
)
