import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: MainPage,
  title: 'pages/MainPage'
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const MainPageLight = Template.bind({})
export const MainPageDark = Template.bind({})
MainPageDark.decorators = [themeDecorator(Theme.DARK)]
