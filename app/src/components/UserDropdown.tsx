import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block m-0 p-0">
      <button
        onClick={toggleDropdown}
        className={`${
          user ? "flex" : "hidden"
        } items-center text-white hover:text-gray-300 space-x-2`}
      >
        <FaUser />
        <span className="hidden sm:inline">{user?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute rounded-xl right-0 mt-2 w-48 bg-black/50 backdrop-blur-md border border-white/20 shadow-lg">
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 text-white-700 rounded-xl hover:bg-neutral-700/50"
              >
                <FaHistory />
                <span>Historia lotów</span>
              </a>
            </li>
            <li>
              <a
                href="/api/auth/logout"
                className="flex items-center space-x-2 px-4 py-2 text-white-700 rounded-xl hover:bg-neutral-700/50"
              >
                <IoLogOut />
                <span>Wyloguj się</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
