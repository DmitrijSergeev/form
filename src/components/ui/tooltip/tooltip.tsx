import { ReactNode } from 'react'

import Tooltip from '@mui/material/Tooltip'

type ToolTipProps = {
  children: ReactNode
}

export function BasicTooltip(props: ToolTipProps) {
  const { children } = props

  return (
    <Tooltip title={'Delete'}>
      <div>{children}</div>
    </Tooltip>
  )
}
