import {useTranslation} from 'react-i18next'
import React from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

interface ILangSwitcherProps {
  className?: string,
}
export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  )
}