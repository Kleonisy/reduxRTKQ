import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t } = useTranslation('main')

  const [inputValue, setInputValue] = useState('')
  const onChange = (val: string) => {
    setInputValue(val)
  }

  return (
    <>
      <BugButton />
      <div>{t('Главная страница')}</div>
      <Input
        onChange={onChange}
        placeholder={t('Введите значение')}
        value={inputValue}
      />
    </>
  )
}

export default MainPage
