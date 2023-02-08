import {classNames} from 'shared/lib/classNames/classNames'
import classname from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom'
import {FC} from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}
export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      className={classNames(classname.appLink, {}, [className, classname[theme]])}
      to={to}
      { ...otherProps }
    >
      {children}
    </Link>
  )
}
