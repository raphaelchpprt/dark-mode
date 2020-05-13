import React, { useContext } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import ThemeContext from "./context/ThemeContext";
import "./index.scss";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <main>
        <Card />
        <Button />
      </main>
    </div>
  );
};

export default App;
