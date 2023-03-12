import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Loader,
  title: 'shared/Loader'
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const LoaderLight = Template.bind({})
export const LoaderDark = Template.bind({})
LoaderDark.decorators = [themeDecorator(Theme.DARK)]
