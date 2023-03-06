import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ErrorPage } from './ErrorPage'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: ErrorPage,
  title: 'widget/ErrorPage'
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />

export const ErrorPageLight = Template.bind({})

export const ErrorPageDark = Template.bind({})
ErrorPageDark.decorators = [themeDecorator(Theme.DARK)]
