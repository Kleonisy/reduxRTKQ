import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
  size?: ButtonSize
  square?: boolean
}
export const Button: FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    size = ButtonSize.M,
    square,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square
  }

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  )
}
