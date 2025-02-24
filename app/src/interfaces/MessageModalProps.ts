import { MessageModalType } from "@/enums/MessageModalType";
import { ModalProps } from "./ModalProps";

export interface MessageModalProps extends ModalProps {
  type: MessageModalType;
  title: string;
  content: string;
}
