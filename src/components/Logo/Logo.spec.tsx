import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from '.'

describe('Logo component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Logo />
    )

    expect(getByText('Cashme')).toBeInTheDocument();
  })
})