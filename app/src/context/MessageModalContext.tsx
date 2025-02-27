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
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState(MessageModalType.MESSAGE);

  const showModal = useCallback(
    (type: MessageModalType, title: string, content: string) => {
      setTitle(title);
      setContent(content);
      setType(type);
      setIsMessageModalOpen(true);
    },
    []
  );

  const hideModal = useCallback(() => {
    setIsMessageModalOpen(false);
  }, []);

  return (
    <MessageModalContext.Provider
      value={{ showModal, hideModal, title, content, type }}
    >
      {children}
      <MessageModal
        isOpen={isMessageModalOpen}
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
