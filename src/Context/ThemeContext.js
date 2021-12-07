import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemesProvider = ({ children }) => {
  const [themes, setThemes] = useState("light");

  const values = { themes, setThemes };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const useThemes = () => useContext(ThemeContext);

export { ThemesProvider, useThemes };
