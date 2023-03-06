import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
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
  title: 'widget/AppLink'
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
AppLinkPrimaryDark.decorators = [themeDecorator(Theme.DARK)]
export const AppLinkSecondaryDark = Template.bind({})
AppLinkSecondaryDark.args = {
  children: 'AppLinkSecondaryDark',
  theme: AppLinkTheme.SECONDARY
}
AppLinkSecondaryDark.decorators = [themeDecorator(Theme.DARK)]
