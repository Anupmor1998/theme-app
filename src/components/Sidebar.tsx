import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        aria-hidden={!isOpen}
        className={`sm:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
        `}
        onClick={onClose}
      />
      <aside
        aria-label="Sidebar navigation"
        className={`sm:hidden fixed top-0 left-0 h-full overflow-auto flex flex-col p-6 transition-transform duration-300 z-30 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] font-(family-name:--font)) w-[var(--sidebar-width)]`}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="p-2 rounded bg-none hover:bg-white/10 transition-colors text-[1.25rem] text-inherit border-none"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:underline" onClick={onClose}>
            Home
          </Link>
          <Link to="/about" className="hover:underline" onClick={onClose}>
            About
          </Link>
        </nav>
      </aside>

      <aside className=" hidden sm:flex fixed top-0 left-0 h-full overflow-auto  sm:flex-col p-6 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] font-(family-name:--font) w-[var(--sidebar-width)]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Menu</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
