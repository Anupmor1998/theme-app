import React from "react";
import { Link } from "react-router-dom";
import themeLogo from "../assets/theme.png";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full shadow z-10 px-4 py-3 flex justify-between items-center transition-all duration-300 bg-[var(--header-bg)] text-[var(--header-text)] font-[var(--font)]">
      <div className="flex items-center gap-3">
        {theme === "theme2" && setSidebarOpen && (
          <button
            aria-label="Open menu"
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="md:hidden mr-2 p-2 rounded bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring"
            style={{ border: "none" }}
          >
            ☰
          </button>
        )}
        <h1 className="text-xl font-bold flex items-center gap-2">
          Hipster
          <img
            className="w-8 h-auto object-contain"
            src={themeLogo}
            alt="theme"
          />
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {theme !== "theme2" && (
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </nav>
        )}
        <div className="relative">
          <select
            aria-label="Select theme"
            value={theme}
            onChange={(e) =>
              setTheme(e.target.value as "theme1" | "theme2" | "theme3")
            }
            className="appearance-none pr-8 pl-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm bg-[var(--bg)] text-[var(--text)] font-[var(--font)] shadow-sm"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
          <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs">
            ▾
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
