// packages
import { ButtonHTMLAttributes, FC } from 'react'
// utils
import { classNames } from 'shared/lib/classNames/classNames'
// styles
import cls from './Button.module.scss'

export enum ThemeButton {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  disabled?: boolean
  theme?: ThemeButton
  size?: ButtonSize
  square?: boolean
}
export const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    disabled,
    theme,
    size = ButtonSize.M,
    square,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.disabled]: disabled,
    [cls.square]: square
  }

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  )
}
