import { useTranslation } from 'react-i18next'
import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}
export const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}
