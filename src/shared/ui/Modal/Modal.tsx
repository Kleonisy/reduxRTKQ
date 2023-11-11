// packages
import React, {
  ReactNode, useCallback, useEffect, useRef, useState
} from 'react'
// utils
import { classNames } from 'shared/lib/classNames/classNames'
// components
import { Portal } from '../Portal/Portal'
// styles
import cls from './Modal.module.scss'

interface ModalProps {
  children?: ReactNode
  className?: string
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    children,
    className,
    isOpen,
    lazy,
    onClose
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeHandler()
    }
  }, [closeHandler])

  const contentClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isOpen) return null
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, 'app_modal'])}>
        <div
          className={cls.overlay}
          onClick={closeHandler}
        >
          <div
            className={cls.content}
            onClick={contentClickHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
