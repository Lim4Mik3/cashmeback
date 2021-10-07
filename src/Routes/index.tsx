import React from 'react'
import { BrowserRouter, Switch  } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { RegisterSales } from '../pages/RegisterSales'
import { Signup } from '../pages/Signup'
import { Route } from './Routes'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/sale" isPrivate component={RegisterSales} />
      </Switch>
    </BrowserRouter>
  )
}