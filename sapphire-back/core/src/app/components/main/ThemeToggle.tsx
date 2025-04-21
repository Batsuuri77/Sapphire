"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark");
    setIsDark(currentTheme);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    const newTheme = next ? "dark" : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-xl font-medium transition-colors duration-200 shadow-md
        bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300
        dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border-zinc-600 cursor-pointer"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
