import { MessageModalType } from "@/enums/MessageModalType";

export interface MessageModalContextType {
  showModal: (type: MessageModalType, title: string, content: string) => void;
  hideModal: () => void;
  title: string;
  content: string;
  type: MessageModalType;
}
