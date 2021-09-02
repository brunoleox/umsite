import React, { useState } from "react";
import Header from "../layouts/Header.jsx";
import Main from "../layouts/Main.jsx";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark, GlobalStyles } from "../styles/styles.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
   
  };
  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <GlobalStyles />
      <Header themeToggle={themeToggler}/>
      <Main />
    </ThemeProvider>
  );
}
