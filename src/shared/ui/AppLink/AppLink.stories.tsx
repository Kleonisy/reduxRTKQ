import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  args: {
    to: '/'
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: AppLink,
  title: 'shared/AppLink'
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const AppLinkPrimary = Template.bind({})
AppLinkPrimary.args = {
  children: 'AppLinkPrimary',
  theme: AppLinkTheme.PRIMARY
}
export const AppLinkSecondary = Template.bind({})
AppLinkSecondary.args = {
  children: 'AppLinkSecondary',
  theme: AppLinkTheme.SECONDARY
}

export const AppLinkPrimaryDark = Template.bind({})
AppLinkPrimaryDark.args = {
  children: 'AppLinkPrimaryDark',
  theme: AppLinkTheme.PRIMARY
}
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const AppLinkSecondaryDark = Template.bind({})
AppLinkSecondaryDark.args = {
  children: 'AppLinkSecondaryDark',
  theme: AppLinkTheme.SECONDARY
}
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
