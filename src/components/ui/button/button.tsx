import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  asComponent?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    asComponent: Component = 'button',
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  const classNames = clsx(className, fullWidth && s.fullWidth, s[variant])

  return <Component className={classNames} {...rest} />
}
