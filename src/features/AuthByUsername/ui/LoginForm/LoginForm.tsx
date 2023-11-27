import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ReducersList, useAsyncReducer } from 'shared/lib/useAsyncReducer.ts/useAsyncReducer'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError'
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import cls from './LoginForm.module.scss'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)
  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)

  useAsyncReducer({ reducers: initialReducers })

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

export default LoginForm
