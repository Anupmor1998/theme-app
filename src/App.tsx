import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="min-h-screen transition-all duration-300 bg-[var(--bg)] text-[var(--text)] font-[var(--font)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
