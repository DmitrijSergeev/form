import { ReactNode, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = {
  children?: ReactNode
  className?: string
}

export const Select = forwardRef((props: SelectProps) => {
  const {} = props
  const classNames = {
    root: s.root,
  }

  return (
    <div className={classNames.root}>
      <SelectRadix.Root>
        <SelectRadix.Trigger>
          <SelectRadix.Value />
          <SelectRadix.Icon />
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content>
            <SelectRadix.ScrollUpButton />
            <SelectRadix.Viewport>
              <SelectRadix.Item value={''}>
                ...
                <SelectRadix.ItemText />
                <SelectRadix.ItemIndicator />
              </SelectRadix.Item>

              <SelectRadix.Group>
                <SelectRadix.Label />
                <SelectRadix.Item value={''}>
                  <SelectRadix.ItemText />
                  <SelectRadix.ItemIndicator />
                </SelectRadix.Item>
              </SelectRadix.Group>

              <SelectRadix.Separator />
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton />
            <SelectRadix.Arrow />
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
})
