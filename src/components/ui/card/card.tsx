import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

import { Typography } from '../../ui/typography'
import { Button } from '../button'
import { BasicTooltip } from '../tooltip/tooltip'

export type CardProps = {
  children?: ReactNode
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
      <Typography className={s.container} variant={'h1'}>
        Hello
      </Typography>
      <Button asComponent={'a'} href={'https://www.google.com/'}>
        THIS IS BUTTON
      </Button>
      <BasicTooltip>
        <div className={s.container}>
          <Button variant={'primary'}>THE SECOND ONE</Button>
        </div>
      </BasicTooltip>
    </div>
  )
}
