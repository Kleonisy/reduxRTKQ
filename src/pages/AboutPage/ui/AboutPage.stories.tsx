import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: AboutPage,
  title: 'pages/AboutPage'
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const AboutPageLight = Template.bind({})
export const AboutPageDark = Template.bind({})
AboutPageDark.decorators = [themeDecorator(Theme.DARK)]
