import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const themeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
