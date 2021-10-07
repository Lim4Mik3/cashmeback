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
  token: UserToken;
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

type UserData = Pick<UserDataRequest, 'user'>;
type UserToken = Pick<UserDataRequest, 'access_token'>;

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps) {
  const [token, setToken] = useState<UserToken>({} as UserToken);
  const [user, setUser] = useState<UserData>({} as UserData)
  const isAuthenticate = !!user;

  useEffect(() => {
    const userToken = localStorage.getItem('@cashmeback.TOKEN')

    if(!userToken) {
      return;
    }

    setToken(JSON.parse(userToken));
  }, [])

  async function Login({ email, password }: UserLoginInput) {
    try {
      const { data }: AxiosResponse<UserDataRequest> = await api.post('/auth/login', {
        email, 
        password
      }) 

      setUser(data);

      localStorage.setItem('@cashmeback.TOKEN', JSON.stringify(data.access_token))
    } catch (err) {
      console.log(err)
    }
  }

  async function Logoff() {
    localStorage.removeItem('@cashmeback.TOKEN');
    setUser({} as UserData);
    setToken({} as UserToken);
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