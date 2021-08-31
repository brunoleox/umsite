import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import {
  Header,
  Logo,
  Wrapper,
  Navbar,
  themeLight,
  themeDark,
  GlobalStyles,
} from "../styles/styles.jsx";
import { useState } from "react";
import { Switch } from "antd";


export default function Home() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <GlobalStyles />
      <Header>
        <Wrapper>
          <Logo>
            <Image src={logo} alt="Logo" />
          </Logo>
          <Navbar>
            <li>
              <Link href="#home">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="#servicos">
                <a>Serviços</a>
              </Link>
            </li>
            <li>
              <Link href="#sobre">
                <a>Quem Somos</a>
              </Link>
            </li>
            <li>
              <Link href="#trabalhos">
                <a>Trabalhos</a>
              </Link>
            </li>
            <li>
              <Link href="#contato">
                <a>Contato</a>
              </Link>
            </li>
          </Navbar>
          <Switch onClick={themeToggler}></Switch>
        </Wrapper>
      </Header>

      <Head>
        <title>Um Site Pro | Criação de Sites</title>
        <meta name="description" content="Um Site Pro | Criação de Sites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </ThemeProvider>
  );
}
