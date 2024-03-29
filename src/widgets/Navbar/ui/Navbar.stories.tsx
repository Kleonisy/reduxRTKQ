import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Navbar,
  title: 'widget/Navbar'
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const NavbarLight = Template.bind({})
NavbarLight.decorators = [StoreDecorator({})]

export const NavbarDark = Template.bind({})
NavbarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const NavbarLoggedIn = Template.bind({})
NavbarLoggedIn.decorators = [StoreDecorator({
  user: {
    userAuthData: {
      id: '1',
      username: 'asdf'
    }
  }
})]
