// context/ThemeSwitchContext.js
import { createContext, useContext, useEffect, useState } from "react";

const ThemeSwitchContext = createContext();

export function ThemeSwitchProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
