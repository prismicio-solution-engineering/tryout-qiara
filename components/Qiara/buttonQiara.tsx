import classNames from 'classnames'
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'

export type ButtonProps = {
  type?: 'primary' | 'secondary'
  htmlType?: 'button' | 'submit'
  size?: 'large' | 'middle' | 'small'
  color?: 'purple-haze' | 'black' | 'grey' | 'white'
  loading?: boolean
  icon?: ReactNode
  children?: ReactNode
  testId?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

export const Button = forwardRef(function Button(
  {
    type = 'secondary',
    size = 'middle',
    color = 'grey',
    htmlType = 'button',
    testId,
    icon,
    children,
    disabled,
    loading,
    className,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      type={htmlType}
      disabled={disabled || loading}
      data-test-id={testId}
      className={classNames(
        'first-letter:uppercase relative rounded-4xl inline-flex gap-2 items-center justify-center select-none outline-none flex-nowrap whitespace-nowrap transition-all ease-in-out',
        { border: type !== 'primary' },
        {
          'hover:brightness-110 hover:saturate-[.9] hover:shadow-md focus:shadow-md active:shadow-neutral-500/30 active:shadow-lg active:shadow-neutral-500/30':
            !disabled && !loading,
        },
        { 'text-sm': size !== 'large' },
        { 'cursor-wait': loading },
        { 'cursor-not-allowed': disabled && !loading },
        { 'opacity-30': disabled || loading },
        {
          'opacity-75 animate-purple-hazing':
            loading &&
            !disabled &&
            color === 'purple-haze' &&
            type === 'primary',
        },
        { 'border-transparent': type === 'primary' },
        {
          'bg-purple-haze text-neutral-100':
            type === 'primary' && color === 'purple-haze',
        },
        {
          'text-neutral-900 font-medium border-purple-haze':
            type !== 'primary' && color === 'purple-haze',
        },
        {
          'hover:border-purple-haze-reverse':
            !disabled && type !== 'primary' && color === 'purple-haze',
        },
        {
          'hover:bg-purple-haze-reverse':
            !disabled && type === 'primary' && color === 'purple-haze',
        },
        {
          'bg-neutral-900 text-neutral-100':
            type === 'primary' && color === 'black',
        },
        {
          'hover:bg-neutral-800':
            !disabled && !loading && type === 'primary' && color === 'black',
        },
        {
          'bg-neutral-100 text-neutral-900 border-neutral-900':
            type !== 'primary' && color === 'black',
        },
        {
          'bg-neutral-400 hover:bg-neutral-500 text-neutral-100':
            type === 'primary' && color === 'grey',
        },
        {
          'bg-neutral-100 text-neutral-500 border-neutral-400':
            type !== 'primary' && color === 'grey',
        },
        {
          'hover:border-neutral-500 focus:border-neutral-500':
            type !== 'primary' && color === 'grey' && !loading && !disabled,
        },
        {
          'bg-neutral-100 text-neutral-900':
            type === 'primary' && color === 'white',
        },
        {
          'bg-neutral-900 text-neutral-100 border-neutral-100':
            type !== 'primary' && color === 'white',
        },
        { 'py-0 px-3': size === 'small' },
        { 'py-1 px-3': size === 'middle' },
        { 'py-3 px-6': size === 'large' },
        { 'h-7': size === 'small' },
        { 'h-8': size === 'middle' },
        { 'h-12': size === 'large' },
        className
      )}
      {...props}>
      {icon}
      {children}
    </button>
  )
})
