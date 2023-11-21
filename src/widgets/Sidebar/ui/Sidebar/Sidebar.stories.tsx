import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
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
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
