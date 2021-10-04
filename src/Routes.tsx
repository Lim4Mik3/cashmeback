import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { RegisterSales } from './pages/RegisterSales'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/sale" component={RegisterSales} />
      </Switch>
    </BrowserRouter>
  )
}