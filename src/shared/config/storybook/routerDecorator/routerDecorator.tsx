import 'app/styles/index.scss'
import { Story } from '@storybook/react/types-7-0'
import { BrowserRouter } from 'react-router-dom'

export const routerDecorator = (story: () => Story) => (
  <BrowserRouter>
    {story()}
  </BrowserRouter>
)
