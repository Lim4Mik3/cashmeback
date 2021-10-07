import React from 'react'
import { render } from '@testing-library/react'
import { SalesTable } from '.'

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

describe('Sales Table form component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <SalesTable />
    )

    expect(getByText('001')).toBeInTheDocument();
    expect(getByText('Cadastrar nova venda')).toBeInTheDocument();
  })

  it('renders in the wide screen', () => {
    const { getByText } = render(
      <SalesTable />
    )

    expect(getByText('Valor')).toBeInTheDocument();
  })

  it('renders in the small and medium screen', () => {
    const { getByText } = render(
      <SalesTable />
    )

    expect(getByText('Valor')).toBeInTheDocument();
  })

  it('actions table rendenred', () => {
    const { getByText } = render(
      <SalesTable />
    )

    expect(getByText('Cadastrar nova venda')).toBeInTheDocument();
  })
})