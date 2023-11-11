import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

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
    <LoginForm />
  </Modal>
)
