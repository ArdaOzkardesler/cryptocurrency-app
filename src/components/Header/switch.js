import React, { useState } from "react";

import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "../../Context/ThemeContext";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const { themes, setThemes } = useTheme();

  const changeTheme = () => {
    setDarkMode(!darkMode);
    setThemes(themes === "light" ? "dark" : "light");
    const links = document.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
      !darkMode
        ? (links[i].style.color = "white")
        : (links[i].style.color = "black");
    }

    const html = document.getElementsByTagName("html");
    html[0].classList.toggle("dark");
  };

  return <DarkModeToggle onChange={changeTheme} checked={darkMode} size={70} />;
}
