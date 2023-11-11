import { ComponentStory, ComponentMeta } from '@storybook/react'
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
