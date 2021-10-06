import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../services/api';

interface SessionProviderProps {
  children: ReactNode;
}

interface SessionContextData {
  Login: (data: userLoginInput) => Promise<void>;
}

interface userData {
  id: number;
  name: string;
  email: string;
  password: string;
  CPF: string;
}

type userLoginInput = Pick<userData, 'email' | 'password'>

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<userData>({} as userData)
  const browserHistory = useHistory();

  async function Login({ email, password }: userLoginInput) {
    const response = await api.get<userData>(`/users?email=${email}`)

    if (!!response.data) {
      console.log("nao há nenhum usuario com esse email");
      return;
    }

    const user: userData = response.data;

    if (user.email === email && user.password === password) {
      setUser(user);
      browserHistory.push('/dashboard');
    }
  }

  return (
    <SessionContext.Provider value={{ Login }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const sessionData = useContext(SessionContext);

  return sessionData;
}