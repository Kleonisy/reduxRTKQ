// packages
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// components
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
// configs
import './shared/config/i18n/i18n'
// styles
import './app/styles/index.scss'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)
