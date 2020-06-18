import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Button = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button onClick={toggle}>
      Set {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Button;
