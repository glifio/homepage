import { cleanup, render, screen, act, fireEvent } from '@testing-library/react'

import Home from './Home'

describe('Home', () => {
  afterEach(cleanup)

  test('it renders the home page', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
