import React, { createContext, useContext } from 'react'
import { ReactNode } from 'react-router/node_modules/@types/react';

interface SessionProviderProps {
  children: ReactNode;
}

const SessionContext = createContext({});

export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <SessionContext.Provider value={{}}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const sessionData = useContext(SessionContext);

  return sessionData;
}