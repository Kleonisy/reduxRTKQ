import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Sidebar,
  title: 'widget/Sidebar'
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SidebarLight = Template.bind({})

export const SidebarDark = Template.bind({})
SidebarDark.decorators = [themeDecorator(Theme.DARK)]
