import styled, {createGlobalStyle} from "styled-components";
import 'antd/dist/antd.css'

export const themeLight = {
  bg: "#3d9be9", 
  text: "#fff",
  hover: "#000",
  toggleBorder: "#fff",
};

export const themeDark = {
  bg: "#363537",
  text: "#fff",
  hover: "#3d9be9",
  selection: "${themelight.bg}",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text}; 
    font-family: Roboto, sans-serif;
    transition: all 0.50s linear;
}
  li a:hover {
    color: ${({ theme }) => theme.hover}
  }
  li a:focus {
    color: ${({ theme }) => theme.hover}
  }
`;

export const Header = styled.div`
  background-color: ${GlobalStyles.bg};
  display: flex;
  justify-content: center;
  height: 100px;
  padding: 10px;
  width: 100%;
`;
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 1024px;
`;
export const Logo = styled.div`
  margin-top: 30px;
  width: 140px;
  height: 90px;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  color: ${GlobalStyles.text};

  li {
    list-style: none;
    margin-left: 10px;
  }

  li:hover {
    color: ${GlobalStyles.hover};
  }
  li::selection {
    color: ${GlobalStyles.selection};
  }

  
span:first-of-type{
    margin-left: 20px;
  }

  button {
    margin: 0 5px
  }
`;

export const Content1 = styled.div`
  background-color: ${themeLight.bgBlue};
`;

