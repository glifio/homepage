import { cleanup, render } from '@testing-library/react'

import Home from './'

describe('Home', () => {
  afterEach(cleanup)

  test('it renders the home page', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
