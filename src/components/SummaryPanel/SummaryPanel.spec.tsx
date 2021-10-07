import React from 'react'
import { render } from '@testing-library/react'
import { SummaryPanel } from '.'

jest.mock('../../hooks/useSales', () => {
  return {
    useSales() {
      return {
        userSales: [{"id":"8b583666-fece-4008-8ebf-4a660ff291fd","user_id":"3b419123-91a7-4580-b4ca-a517647d3e89","sale_code":"001","amount":28000,"sale_date":"2021-04-04","percent_cashback":15,"cashback_amount":4200,"sale_status":"APROVADA"}]
      }
    }
  }
})

jest.mock('@chakra-ui/react', () => {
  const modules = jest.requireActual('@chakra-ui/react');
  return {
    __esModule: true,
    ...modules,
    useBreakpointValue: () => {
      return true
    }
  }
})

describe('Summary panel component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <SummaryPanel />
    )

    expect(getByText('Cashback acumulado')).toBeInTheDocument();
    expect(getByText('Vendas')).toBeInTheDocument();
    expect(getByText('Último cashback')).toBeInTheDocument();
  })

  it('Create a correct card with the correct informations', () => {
    const { getByText } = render(
      <SummaryPanel />
    )

    expect(getByText('R$ 42,00')).toBeInTheDocument();
    expect(getByText('15%')).toBeInTheDocument();
  })
})