import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { Check } from '../../../assets'

export const Checkbox = () => {
  const classNames = {
    root: s.root,
  }

  return (
    <div>
      <CheckboxRadix.Root className={classNames.root}>
        <CheckboxRadix.Indicator>
          <Check />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
    </div>
  )
}
