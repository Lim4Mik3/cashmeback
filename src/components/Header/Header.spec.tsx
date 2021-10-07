import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'

jest.mock('@chakra-ui/react', () => {
  const modules = jest.requireActual('@chakra-ui/react');
  return {
    __esModule: true,
    ...modules,
    useBreakpointValue: jest.fn()
  }
})

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Header />
    )

    expect(getByText('Cashme')).toBeInTheDocument();
   })
})