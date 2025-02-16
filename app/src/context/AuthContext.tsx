"use client"
import { useAuth } from '@/hooks/useAuth';
import { AuthContextType } from '@/interfaces/AuthContextType';
import { createContext, useContext, ReactNode } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, loading, error, refetch } = useAuth();

  return (
    <AuthContext.Provider value={{ user, loading, error, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};