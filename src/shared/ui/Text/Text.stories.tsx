import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Text,
  title: 'shared/Text'
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const TextDefault = Template.bind({})
TextDefault.args = {
  text: 'Text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum?',
  title: 'Title title title'
}
export const TextDefaultDark = Template.bind({})
TextDefaultDark.args = {
  text: 'Text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum?',
  title: 'Title title title'
}
TextDefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title title title'
}
export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title title title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum?'
}
export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum?'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextError = Template.bind({})
TextError.args = {
  text: 'Text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum?',
  theme: TextTheme.ERROR,
  title: 'Title title title'
}
