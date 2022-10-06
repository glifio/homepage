import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('Apps home page', () => {
  test('it renders correctly', () => {
    const { container } = render(<Home />)

    expect(screen.getAllByText('Wallet')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Safe')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Explorer')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Verify')[0]).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
