import { createContext, useContext, useEffect, useState } from "react";

const ThemeSwitchContext = createContext();

export function ThemeSwitchProvider({ children }) {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return getSystemTheme(); // فقط در ابتدا
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeSwitchContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeSwitchContext);
}
