import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Navbar,
  title: 'widget/Navbar'
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const NavbarLight = Template.bind({})

export const NavbarDark = Template.bind({})
NavbarDark.decorators = [themeDecorator(Theme.DARK)]
