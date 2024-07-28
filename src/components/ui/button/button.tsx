import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

import { PolymorphRef } from '../../../types'

type Props<T extends ElementType> = {
  asComponent?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

type ButtonComponent = <T extends ElementType = 'button'>(
  props: PolymorphRef<T> & Props<T>
) => ReactNode

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    { asComponent, children, className, fullWidth, icon, variant = 'primary', ...rest }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const classNames = clsx(s[variant], fullWidth && s.fullWidth, className, s.button)

    const Component: ElementType = asComponent || 'button'

    return (
      <Component className={classNames} ref={ref} {...rest}>
        {icon}
        {children}
      </Component>
    )
  }
)
