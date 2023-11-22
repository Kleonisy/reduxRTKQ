import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

export const LoginModal = ({
  className, isOpen, lazy, onClose
}: LoginModalProps) => (
  <Modal
    className={classNames(className, {}, [])}
    isOpen={isOpen}
    lazy={lazy}
    onClose={onClose}
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
)
