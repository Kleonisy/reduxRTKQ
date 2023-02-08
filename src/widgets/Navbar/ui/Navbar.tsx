import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'

interface INavbarProps {
  className?: string,
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to='/' theme={AppLinkTheme.SECONDARY}>Main Page</AppLink>
        <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  )
}
