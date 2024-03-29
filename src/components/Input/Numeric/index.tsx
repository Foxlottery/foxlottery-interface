import { classNames, escapeRegExp } from 'app/functions'
import React, { FC, forwardRef } from 'react'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

const defaultClassName = 'w-0 p-0 text-2xl bg-transparent'

interface Input extends Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'> {
  value: string | number
  onUserInput: (input: string) => void
  error?: boolean
  fontSize?: string
  align?: 'right' | 'left'
  isOnlyInteger?: boolean
}

export const Input: FC<Input> = forwardRef<HTMLInputElement, Input>(
  ({ value, onUserInput, placeholder, className = defaultClassName, min, isOnlyInteger, title, ...rest }, ref) => {
    const enforcer = (nextUserInput: string) => {
      if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
        onUserInput(nextUserInput)
      }
    }

    return (
      <input
        {...rest}
        ref={ref}
        value={value}
        onChange={(event) => {
          enforcer(event.target.value.replace(/,/g, ''))
          if (isOnlyInteger) {
            enforcer(event.target.value.replace('.', ''))
          }
        }}
        // universal input options
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder={placeholder || '0.0'}
        min={min || 0}
        minLength={1}
        maxLength={79}
        spellCheck="false"
        className={classNames(
          'relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary',
          className
        )}
      />
    )
  }
)

Input.displayName = 'NumericalInput'

export default Input

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
