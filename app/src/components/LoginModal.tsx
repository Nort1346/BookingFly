import { LoginModalProps } from "@/interfaces/LoginModalProps";
import { useEffect, useState } from "react";

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
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
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-out 
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`backdrop-blur-md bg-black/50 p-6 rounded-lg w-96 transition-all duration-500 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-2xl font-extrabold flex justify-center mb-4">
          Logowanie
        </h2>
        <form>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="input" placeholder="Wpisz email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Hasło</label>
            <input
              type="password"
              className="input"
              placeholder="Wpisz hasło"
            />
          </div>
          <button type="submit" className="w-full btn">
            Zaloguj się
          </button>
        </form>
        <span className="block mt-3">Nie posiadasz konta?</span>
        <button
          onClick={onClose}
          className="mt-1 w-full btn h-10 justify-center p-1"
        >
          Zarejestruj się
        </button>
        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
