import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Input,
  title: 'shared/Input'
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputPrimary = Template.bind({})
InputPrimary.args = {
  placeholder: 'Text',
  value: '123'

}
