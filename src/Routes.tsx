import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}