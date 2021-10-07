import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';
import { useSession } from './useSession';

interface SalesContextProviderProps {
  children: ReactNode;
}

interface SalesContextData {
  getAllSales: () => Promise<void>;
  userSales: UserSalesData[];
}

export interface UserSalesData {
  id: string;
  user_id: string;
  sale_code: string;
  amount: number;
  sale_date: string;
  percent_cashback: number;
  cashback_amount: number;
  sale_status: string;
}

const SalesContext = createContext<SalesContextData>({} as SalesContextData);

export function SalesContextProvider({ children }: SalesContextProviderProps) {
  const [userSales, setUserSales] = useState<UserSalesData[]>([] as UserSalesData[])
  const { user, token } = useSession();

  async function getAllSales() {
    try {
      const { data } = await api.get(`/sales?id=${user.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      setUserSales(data);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SalesContext.Provider value={{ userSales, getAllSales }}>
      {children}
    </SalesContext.Provider>
  )
}

export const useSales = () => {
  const salesData = useContext(SalesContext);

  return salesData;
}