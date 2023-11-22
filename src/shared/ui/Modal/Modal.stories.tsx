import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Modal,
  title: 'shared/Modal'
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalDefault = Template.bind({})
ModalDefault.args = {
  children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quam accusamus, necessitatibus aperiam nemo modi recusandae veritatis dolores laboriosam temporibus odit 
    veniam porro ut neque obcaecati dolore vitae. Officiis recusandae ad vitae aliquid ab nesciunt itaque 
    cupiditate dolores, maiores voluptate cumque natus earum aliquam deserunt id voluptas animi. Eligendi, 
    molestias facilis.`,
  isOpen: true
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam accusamus, necessitatibus aperiam 
    nemo modi recusandae veritatis dolores laboriosam temporibus odit veniam porro ut neque obcaecati dolore vitae. 
    Officiis recusandae ad vitae aliquid ab nesciunt itaque cupiditate dolores, maiores voluptate cumque natus earum 
    aliquam deserunt id voluptas animi. Eligendi, molestias facilis.`,
  isOpen: true
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
