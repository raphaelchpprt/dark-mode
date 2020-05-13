import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Button = () => {
  const { toggle } = useContext(ThemeContext);

  return <button onClick={toggle}>Set X mode</button>;
};

export default Button;
