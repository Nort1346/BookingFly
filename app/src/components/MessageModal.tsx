"use client";
import { MessageModalType } from "@/enums/MessageModalType";
import { MessageModalProps } from "@/interfaces/MessageModalProps";
import { useEffect, useState } from "react";

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  type,
}) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen && !shouldRender) {
      setShouldRender(true);
      setTimeout(() => setVisible(true), 10);
      document.body.classList.add("overflow-hidden");
    } else if (!isOpen && shouldRender) {
      setVisible(false);
      setTimeout(() => setShouldRender(false), 400);
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center bg-black/0 backdrop-blur-sm transition-opacity duration-500 ease-out 
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`backdrop-blur-md bg-neutral-900 shadow-lg border-l-4 border-r-4 p-6 rounded-sm w-full max-w-[80vw] md:max-w-[50vw] xl:max-w-[30vw] transition-all duration-500 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          type === MessageModalType.MESSAGE
            ? "border-blue-500"
            : "border-red-700"
        }`}
      >
        <h2 className="text-2xl font-extrabold flex justify-center mb-4">
          {title}
        </h2>
        <div className="text-pretty text-zinc-200 text-md">{content}</div>
        <button
          onClick={onClose}
          className={`mt-4 btn w-full ${
            type === MessageModalType.MESSAGE ? "btn" : "btn-danger"
          }`}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
