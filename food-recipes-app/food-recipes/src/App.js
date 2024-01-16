import "./App.css";
// import { Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import Homepage from "./pages/homepage/homepage";
import ThemeButton from "./components/theme-button/theme";
// import RecipeItem from "./components/recipe-item/recipe";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App" style={theme ? {backgroundColor : "#641663"} : {}}>
        <ThemeButton />
        <Homepage />

        {/* Page-routes */}
        {/* <Routes>
          <Route path="/" index element={Homepage}/>
          <Route path="/recipe/id" element={RecipeItem}/>
          
        </Routes> */}
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
