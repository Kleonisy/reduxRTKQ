import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface IErrorPageProps {
  className?: string,
}
export const ErrorPage = ({ className }: IErrorPageProps) => {
  const { t } = useTranslation()
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.errorPage, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
