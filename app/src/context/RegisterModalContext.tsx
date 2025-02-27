"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { ModalContextType } from "@/interfaces/ModalContextType";
import RegisterModal from "@/components/RegisterModal";

const RegisterModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const RegisterModalProvider = ({ children }: { children: ReactNode }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsRegisterModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsRegisterModalOpen(false);
  }, []);

  return (
    <RegisterModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={hideModal} />
    </RegisterModalContext.Provider>
  );
};

export const useRegisterModal = () => {
  const context = useContext(RegisterModalContext);
  if (!context) {
    throw new Error("useRegisterModal must be used within an RegisterModalProvider");
  }
  return context;
};
