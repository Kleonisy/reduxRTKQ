import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string,
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation('translation')
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  )
}
