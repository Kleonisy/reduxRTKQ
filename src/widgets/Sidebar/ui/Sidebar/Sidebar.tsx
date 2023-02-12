import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher'

interface ISidebarProps {
  className?: string,
}
export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>
        Toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}