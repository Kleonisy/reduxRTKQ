import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Кнопка для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  useEffect(() => {
    if (error) throw Error
  }, [error])

  return (
    <Button
      onClick={() => setError(true)}
    >
      {t('Выкинуть тестовую ошибку')}
    </Button>
  )
}
