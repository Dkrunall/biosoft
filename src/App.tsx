import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>

      {/* Floating Theme Toggle - bottom right */}
      <button
        aria-label="Toggle dark/light mode"
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-[100] h-12 w-12 rounded-full border border-black bg-white text-black shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 dark:border-white/20 dark:bg-dark-800 dark:text-white"
      >
        {isDark ? <Sun size={20} className="mx-auto" /> : <Moon size={20} className="mx-auto" />}
      </button>
    </Router>
  );
}
