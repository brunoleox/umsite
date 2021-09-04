import React, { useState } from "react";
import Header from "../layouts/Header.jsx";
import Section1 from "../layouts/Section1.jsx";
import Section2 from "../layouts/Section2.jsx";
import Section3 from "../layouts/Section3.jsx";
import Section4 from "../layouts/Section4.jsx";
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
      <Header themeToggle={themeToggler} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </ThemeProvider>
  );
}
