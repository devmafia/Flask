
import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

interface CallContextType {
  calls: any[];
  fetchCalls: (token: string) => void;
  deleteCall: (id: number) => void;
}

export const CallContext = createContext<CallContextType>({
  calls: [],
  fetchCalls: () => {},
  deleteCall: () => {},
});

export const CallProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [calls, setCalls] = useState<any[]>([]);

  const fetchCalls = useCallback(async (token: string) => {
    try {
      const response = await axios.get('http://localhost:5000/api/calls',
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setCalls(response.data);
    } catch (error) {
      console.error('Error fetching calls:', error);
    }
  }, []);

  const deleteCall = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/calls/${id}`);
      setCalls(prevCalls => prevCalls.filter(call => call.id !== id));
    } catch (error) {
      console.error('Error deleting call:', error);
    }
  };

  return (
    <CallContext.Provider value={{ calls, fetchCalls, deleteCall }}>
      {children}
    </CallContext.Provider>
  );
};
