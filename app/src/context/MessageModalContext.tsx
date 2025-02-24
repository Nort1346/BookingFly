"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import MessageModal from "@/components/MessageModal";
import { MessageModalContextType } from "@/interfaces/MessageModalContextType";
import { MessageModalType } from "@/enums/MessageModalType";

const MessageModalContext = createContext<MessageModalContextType | undefined>(
  undefined
);

export const MessageModalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState(MessageModalType.MESSAGE);

  const showModal = useCallback(
    (type: MessageModalType, title: string, content: string) => {
      setTitle(title);
      setContent(content);
      setType(type);
      setIsLoginModalOpen(true);
    },
    []
  );

  const hideModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <MessageModalContext.Provider
      value={{ showModal, hideModal, title, content, type }}
    >
      {children}
      <MessageModal
        isOpen={isLoginModalOpen}
        onClose={hideModal}
        title={title}
        content={content}
        type={type}
      />
    </MessageModalContext.Provider>
  );
};

export const useMessageModal = () => {
  const context = useContext(MessageModalContext);
  if (!context) {
    throw new Error(
      "useMessageModal must be used within an MessageModalProvider"
    );
  }
  return context;
};
