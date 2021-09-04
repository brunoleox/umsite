import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { Switch } from "antd";
import {
  Container,
  Logo,
  Wrapper,
  Navbar,
} from "./styles.jsx";

export default function Header(props) {
  return (
    <>      
      <header>
        <Container>
          <Wrapper>
            <Logo>
              <a href="#home">
                <Image src={logo} alt="Logo" />
              </a>
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

              <div>
                <BulbFilled />
                <Switch onClick={props.themeToggle}></Switch>
                <BulbOutlined />
              </div>
            </Navbar>
          </Wrapper>
        </Container>
      </header>
      <Head>
        <title>Um Site Pro | Criação de Sites</title>
        <meta name="description" content="Um Site Pro | Criação de Sites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
