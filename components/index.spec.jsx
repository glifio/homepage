import { cleanup, render, screen, act, fireEvent } from '@testing-library/react'
import { theme, ThemeProvider } from '@glif/react-components'

import Home from './Home'

describe('Apps home page', () => {
  test('it renders correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    expect(screen.getAllByText('Wallet')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Safe')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Explorer')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Verify')[0]).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
