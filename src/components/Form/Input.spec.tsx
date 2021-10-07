import React from 'react'
import { render } from '@testing-library/react'
import { Input } from './Input'

describe('Input form component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <Input name="Teste" label="Input de test" />
    )

    expect(getByLabelText('Input de test')).toBeInTheDocument();
  })
})