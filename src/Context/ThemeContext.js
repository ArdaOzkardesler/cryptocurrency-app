import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemesProvider = ({ children }) => {
  const [themes, setThemes] = useState("light");

  const values = { themes, setThemes };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemesProvider, useTheme };
