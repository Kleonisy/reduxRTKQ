import React, {
  InputHTMLAttributes, memo, useEffect, useRef
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  autofocus?: boolean
  className?: string
  onChange?: (value: string) => void
  lazy?: boolean
  value?: string
}

export const Input = memo((props: InputProps) => {
  const {
    autofocus = false,
    className,
    onChange,
    type = 'text',
    value,
    placeholder,
    ...otherProps
  } = props
  const focusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focusRef?.current && autofocus) {
      focusRef.current.focus()
    }
  }, [autofocus])
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <input
        className={cls.input}
        onChange={onChangeHandler}
        ref={focusRef}
        type={type}
        value={value}
        {...otherProps}
      />
    </div>
  )
})
