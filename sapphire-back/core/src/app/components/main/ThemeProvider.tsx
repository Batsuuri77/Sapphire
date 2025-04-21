"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const theme = storedTheme || "light";

    // 🔄 Reset and apply
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // 💾 Optional: save to storage
    if (!storedTheme) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return <>{children}</>;
}
