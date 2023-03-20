// packages
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
// components
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
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
  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={handleToggleModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Modal>
    </div>
  )
}
