import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ThemeButton } from './Button'

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

export const ClearInvertedButton = Template.bind({})
ClearInvertedButton.args = {
  children: 'Text Clear Inverted',
  theme: ThemeButton.CLEAR_INVERTED
}

export const ButtonOutline = Template.bind({})
ButtonOutline.args = {
  children: 'Text Outline',
  theme: ThemeButton.OUTLINE
}
export const ButtonOutlineSizeL = Template.bind({})
ButtonOutlineSizeL.args = {
  children: 'Text Outline L',
  size: ButtonSize.L,
  theme: ThemeButton.OUTLINE
}
export const ButtonOutlineSizeXL = Template.bind({})
ButtonOutlineSizeXL.args = {
  children: 'Text Outline XL',
  size: ButtonSize.XL,
  theme: ThemeButton.OUTLINE
}

export const ButtonOutlineDark = Template.bind({})
ButtonOutlineDark.args = {
  children: 'Text Outline Dark',
  theme: ThemeButton.OUTLINE
}
ButtonOutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ButtonBackgroundTheme = Template.bind({})
ButtonBackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND
}

export const ButtonInvertedBackgroundTheme = Template.bind({})
ButtonInvertedBackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED
}

export const ButtonSquare = Template.bind({})
ButtonSquare.args = {
  children: '>',
  square: true,
  theme: ThemeButton.BACKGROUND_INVERTED
}

export const ButtonSquareSizeL = Template.bind({})
ButtonSquareSizeL.args = {
  children: '>',
  size: ButtonSize.L,
  square: true,
  theme: ThemeButton.BACKGROUND_INVERTED
}

export const ButtonSquareSizeXL = Template.bind({})
ButtonSquareSizeXL.args = {
  children: '>',
  size: ButtonSize.XL,
  square: true,
  theme: ThemeButton.BACKGROUND_INVERTED
}

export const ButtonDisabled = Template.bind({})
ButtonDisabled.args = {
  children: '>',
  disabled: true,
  theme: ThemeButton.OUTLINE
}
