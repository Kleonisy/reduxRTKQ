import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: LoginForm,
  title: 'features/LoginForm'
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const LoginFormPrimary = Template.bind({})
LoginFormPrimary.decorators = [StoreDecorator({
  loginForm: {
    password: '123',
    username: 'asdf'
  }
})]

export const LoginFormWithError = Template.bind({})
LoginFormWithError.decorators = [StoreDecorator({
  loginForm: {
    error: 'Test error on login',
    password: '123',
    username: 'asdf'
  }
})]

export const LoginFormLoading = Template.bind({})
LoginFormLoading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true
  }
})]
