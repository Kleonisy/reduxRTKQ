import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string,
}

export const Navbar = ({ className }: INavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink className={cls.mainLink} to="/" theme={AppLinkTheme.SECONDARY}>Main Page</AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
    </div>
  </div>
)
