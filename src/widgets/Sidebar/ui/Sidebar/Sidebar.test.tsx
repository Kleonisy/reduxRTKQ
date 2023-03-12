import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('Test Sidebar render', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('Sidebar'))
  })
  test('Test Sidebar toggle', () => {
    componentRender(<Sidebar />)
    const toggleButton = screen.getByTestId('SidebarToggleButton')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  })
})
