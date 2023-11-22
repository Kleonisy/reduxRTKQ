// packages
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
// components
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
// constants
import { AUTH_LOCALSTORAGE_TOKEN } from 'shared/constants/constants'
// store
import { getUserAuthData, userActions } from 'entities/User'
// utils
import { classNames } from 'shared/lib/classNames/classNames'
// styles
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string,
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { username } = useSelector(getUserAuthData) || {}

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const handleLogout = useCallback(() => {
    localStorage?.removeItem(AUTH_LOCALSTORAGE_TOKEN)
    dispatch(userActions.logout)
  }, [dispatch])

  if (username) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          className={cls.links}
          onClick={handleLogout}
          theme={ThemeButton.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={handleOpenModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        lazy
        onClose={handleCloseModal}
      />
    </div>
  )
}
