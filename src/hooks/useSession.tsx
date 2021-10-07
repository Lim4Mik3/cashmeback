import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../services/api';

interface SessionProviderProps {
  children: ReactNode;
}

interface SessionContextData {
  Login: (data: UserLoginInput) => Promise<void>;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  password?: string;
  cpf: string;
}

type UserLoginInput = Pick<UserData, 'email' | 'password'>

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<UserData>({} as UserData)
  const browserHistory = useHistory();

  async function Login({ email, password }: UserLoginInput) {
    const response = await api.get<UserData>(`/users?email=${email}`)

    if (!!response.data) {
      console.log("nao há nenhum usuario com esse email");
      return;
    }

    const user: UserData = response.data;

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