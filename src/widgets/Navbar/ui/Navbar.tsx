// packages
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
// components
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
// utils
import { classNames } from 'shared/lib/classNames/classNames'
// styles
import cls from './Navbar.module.scss'

interface INavbarProps {
  className?: string,
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation('translation')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

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
