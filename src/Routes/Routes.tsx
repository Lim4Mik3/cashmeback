import React from 'react'
import { Route as ReactRoute, Redirect, RouteProps as ReactRouteProps } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

interface RouteProps extends ReactRouteProps { 
  isPrivate?: boolean;
}

export function Route({ isPrivate = false, ...rest }: RouteProps) {
  const { isAuthenticate } = useSession();

  if (isPrivate && !isAuthenticate) {
    return <Redirect to="/" />
  }

  if (!isPrivate && isAuthenticate) {
    return <Redirect to="/dashboard" />
  }

  return (
    <ReactRoute {...rest} />
  )
}