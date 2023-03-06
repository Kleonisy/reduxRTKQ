import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from './Button'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Button,
  title: 'shared/Button'
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonWithChildren = Template.bind({})
ButtonWithChildren.args = {
  children: 'Text'
}

export const ClearButton = Template.bind({})
ClearButton.args = {
  children: 'Text Clear',
  theme: ThemeButton.CLEAR
}

export const ButtonOutline = Template.bind({})
ButtonOutline.args = {
  children: 'Text Clear',
  theme: ThemeButton.OUTLINE
}

export const ButtonOutlineDark = Template.bind({})
ButtonOutlineDark.args = {
  children: 'Text Clear',
  theme: ThemeButton.OUTLINE
}
ButtonOutlineDark.decorators = [themeDecorator(Theme.DARK)]
