import React, { useState, useEffect } from "react";

import DarkModeToggle from "react-dark-mode-toggle";
import { useThemes } from "../../Context/ThemeContext";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const { themes, setThemes } = useThemes();

  // const checkStatus = () => {};

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      // console.log("dark");
      setThemes("dark");
      const links = document.getElementsByTagName("a");

      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
      }
      const html = document.getElementsByTagName("html");
      html[0].style.backgroundColor = "#1e1e1e";

      setDarkMode(true);
    } else {
      setThemes("light");
      const links = document.getElementsByTagName("a");

      for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }

      const html = document.getElementsByTagName("html");
      html[0].style.backgroundColor = "white";
      setDarkMode(false);
    }
  }, [setThemes, darkMode]);

  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }

  const changeTheme = () => {
    setDarkMode(!darkMode);
    localStorage.getItem("darkMode") === "true"
      ? localStorage.setItem("darkMode", "false")
      : localStorage.setItem("darkMode", "true");

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
