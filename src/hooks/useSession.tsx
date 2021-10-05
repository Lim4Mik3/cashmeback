import React, { createContext, useContext } from 'react'
import { ReactNode } from 'react-router/node_modules/@types/react';

interface SessionProviderProps {
  children: ReactNode;
}

interface SessionContextData {
  userLogged: boolean;
}

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps) {
  const userLogged = false

  return (
    <SessionContext.Provider value={{ userLogged }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const sessionData = useContext(SessionContext);

  return sessionData;
}