import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

import { Button } from '../button'

export type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = (props: CardProps) => {
  const { className } = props
  const classNames = {
    container: clsx(s.root, className),
    root: s.root,
  }

  return (
    <div className={classNames.root}>
      <div className={s.container}>Hello</div>
      <Button asComponent={'a'} href={'https://www.google.com/'}>
        THIS IS BUTTON
      </Button>
      <div className={s.container}>
        <Button variant={'primary'}>THE SECOND ONE</Button>
      </div>
    </div>
  )
}
