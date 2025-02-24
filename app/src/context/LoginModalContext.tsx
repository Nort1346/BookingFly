"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import LoginModal from "@/components/LoginModal";
import { ModalContextType } from "@/interfaces/ModalContextType";

const LoginModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <LoginModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <LoginModal isOpen={isLoginModalOpen} onClose={hideModal} />
    </LoginModalContext.Provider>
  );
};

export const useLoginModal = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error("useLoginModal must be used within an LoginModalProvider");
  }
  return context;
};
