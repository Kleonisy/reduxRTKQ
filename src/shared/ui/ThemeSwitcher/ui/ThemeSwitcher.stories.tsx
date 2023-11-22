import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: ThemeSwitcher,
  title: 'shared/ThemeSwitcher'
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeProvider>
    <ThemeSwitcher {...args} />
  </ThemeProvider>
)

export const ThemeSwitcherLight = Template.bind({})

export const ThemeSwitcherDark = Template.bind({})
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
