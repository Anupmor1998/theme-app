import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const isTheme2 = theme === "theme2";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen transition-all duration-300 bg-[var(--bg)] text-[var(--text)] font-(family-name:--font)">
      {isTheme2 && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
      <Header setSidebarOpen={setSidebarOpen} />
      <div
        className={`pt-16 px-4 transition-all duration-300 ${
          isTheme2 ? "md:ml-[var(--sidebar-width)]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
