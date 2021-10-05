import React from 'react'

import { SummaryPanel } from '../../components/SummaryPanel'
import { SalesTable } from '../../components/SalesTable'
import { PrivateLayout } from '../../components/Layouts/PrivateLayout'

export function Dashboard() {

  return (
    <PrivateLayout>
      <SummaryPanel />

      <SalesTable />
    </PrivateLayout>
  )
}