import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/LoginSlice'
import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    error,
    isLoading,
    username,
    password
  } = useSelector(getLoginState)

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])
  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])
  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ password, username }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={t('Вы ввели неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autofocus
        className={cls.input}
        onChange={handleChangeUsername}
        placeholder={t('Введите логин')}
        type="text"
        value={username}
      />
      <Input
        className={cls.input}
        onChange={handleChangePassword}
        placeholder={t('Введите пароль')}
        type="text"
        value={password}
      />
      <Button
        className={cls.loginBtn}
        disabled={isLoading}
        onClick={handleLogin}
        theme={ThemeButton.OUTLINE}
        type="submit"
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
