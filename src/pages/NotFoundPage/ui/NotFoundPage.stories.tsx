import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFoundPage } from './NotFoundPage'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: NotFoundPage,
  title: 'pages/NotFoundPage'
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const NotFoundPageLight = Template.bind({})
export const NotFoundPageDark = Template.bind({})
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]
