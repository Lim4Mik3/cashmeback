import React, { useEffect } from 'react'

import { SummaryPanel } from '../../components/SummaryPanel'
import { SalesTable } from '../../components/SalesTable'
import { PrivateLayout } from '../../components/Layouts/PrivateLayout'
import { useSales } from '../../hooks/useSales'

export function Dashboard() {
  const { getAllSales } = useSales();

  useEffect(() => {
    (async function() {
      await getAllSales()
    })()
  }, [])

  return (
    <PrivateLayout>
      <SummaryPanel />

      <SalesTable />
    </PrivateLayout>
  )
}