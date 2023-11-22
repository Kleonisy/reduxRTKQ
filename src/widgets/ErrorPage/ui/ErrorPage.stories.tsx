import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
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
ErrorPageDark.decorators = [ThemeDecorator(Theme.DARK)]
