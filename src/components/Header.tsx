import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full shadow z-10 px-4 py-3 flex justify-between items-center transition-all duration-300 bg-[var(--bg)] text-[var(--text)] font-[var(--font)]">
      <h1 className="text-xl font-bold">Multi-Theme App</h1>
      <div className="flex items-center gap-4">
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="p-1 border rounded bg-[var(--bg)] text-[var(--text)] font-[var(--font)]"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
