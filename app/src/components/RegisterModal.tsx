"use client";
import { useMessageModal } from "@/context/MessageModalContext";
import { MessageModalType } from "@/enums/MessageModalType";
import { ModalProps } from "@/interfaces/ModalProps";
import { useEffect, useState } from "react";

const RegisterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showModal } = useMessageModal();

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, surname }),
      });

      if (!response.ok) {
        const data = await response?.json();
        const responseMessage = await data?.error;
        throw new Error(responseMessage);
      }
      showModal(
        MessageModalType.MESSAGE,
        "Konto utworzone",
        "Zaloguj się, aby rozpocząć"
      );
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/0 backdrop-blur-sm transition-opacity duration-500 ease-out 
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`backdrop-blur-md bg-neutral-900 shadow-lg border border-neutral-700 p-6 rounded-lg w-96 max-h-[95vh] overflow-y-auto transition-all duration-500 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-2xl font-extrabold flex justify-center mb-4">
          Rejestracja
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Imię</label>
            <input
              type="text"
              className="input"
              placeholder="Wpisz imię"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Nazwisko</label>
            <input
              type="text"
              className="input"
              placeholder="Wpisz nazwisko"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Wpisz email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Hasło</label>
            <input
              type="password"
              className="input"
              placeholder="Wpisz hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full btn" disabled={loading}>
            {loading ? "Tworzenie konta..." : "Zapisz się"}
          </button>
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-white hover:text-gray-500"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
