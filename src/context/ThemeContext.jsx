import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext("");

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => localStorage.setItem("theme", theme));

  const toggle = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
