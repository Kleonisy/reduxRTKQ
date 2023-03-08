import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string,
}
export const Sidebar = ({ className }: ISidebarProps) => {
  const { t } = useTranslation('translation')
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid="Sidebar"
    >
      <Button
        data-testid="SidebarToggleButton"
        onClick={onToggle}
      >
        {t('Переключатель')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
