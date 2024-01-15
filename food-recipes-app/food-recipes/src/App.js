import "./App.css";
import React, { createContext, useState } from "react";
import Homepage from "./pages/homepage/homepage";
import ThemeButton from "./components/theme-button/theme";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App" style={theme ? {backgroundColor : "#641663"} : {}}>
        <ThemeButton />
        <Homepage />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
