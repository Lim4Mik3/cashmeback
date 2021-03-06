import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import { api } from '../services/api';

interface SessionProviderProps {
  children: ReactNode;
}

interface SessionContextData {
  Login: (data: UserLoginInput) => Promise<void>;
  Logoff: () => void;
  isAuthenticate: boolean;
  user: UserData;
  token: string;
}

interface UserDataRequest {
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
    password?: string;
    cpf: string;
  }
}

interface UserLoginInput {
  email: string;
  password: string;
}

type UserData = {
  id: number;
  name: string;
  email: string;
  password?: string;
  cpf: string;
}

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<UserData>({} as UserData)
  const [isAuthenticate, setIsAuthenticate] = useState(false);


  useEffect(() => {
    const userToken = localStorage.getItem('@cashmeback.TOKEN')
    const user = localStorage.getItem('@cashmeback.USER')

    if(!userToken || !user) {
      return;
    }

    setToken(JSON.parse(userToken));
    setUser(JSON.parse(user));
    setIsAuthenticate(true);
  }, [])

  async function Login({ email, password }: UserLoginInput) {
    try {
      const { data }: AxiosResponse<UserDataRequest> = await api.post('/auth/login', {
        email, 
        password
      }) 

      const { user, access_token } = data;

      setUser(user);
      setToken(access_token);
      setIsAuthenticate(true);
      localStorage.setItem('@cashmeback.TOKEN', JSON.stringify(data.access_token))
      localStorage.setItem('@cashmeback.USER', JSON.stringify(data.user))
    } catch (error: any) {
      throw new Error(`${error.response.data.error}`)
    }
  }

  async function Logoff() {
    localStorage.removeItem('@cashmeback.TOKEN');
    localStorage.removeItem('@cashmeback.USER');
    setIsAuthenticate(false);
    setUser({} as UserData);
    setToken('');
  }

  return (
    <SessionContext.Provider value={{ Login, Logoff, isAuthenticate, user, token }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const sessionData = useContext(SessionContext);

  return sessionData;
}