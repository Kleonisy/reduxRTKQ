import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Button', () => {
  test('Test Sidebar render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('Sidebar'))
  })
  test('Test Sidebar toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId('SidebarToggleButton')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  })
})
