import "antd/dist/antd.css";
import styled, { createGlobalStyle } from "styled-components";

export const themeLight = {
  bg: "#3d9be9",
  text: "#fff",
  hover: "#000",
  toggleBorder: "#fff",
  bgFlip1: "#2a9d8f",
  bgFlip2: "#023047" ,
  bgFlip3: "#9d0208",
};

export const themeDark = {
  bg: "#363537",
  text: "#fff",
  hover: "#2a9d8f",
  selection: "${themelight.bg}",
  toggleBorder: "#6B8096",
  bgFlip1: "#495057",
  bgFlip2: "#003566" ,
  bgFlip3: "#540b0e",
};

export const GlobalStyles = createGlobalStyle`
  header {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text}; 
    font-family: Roboto, sans-serif;
    transition: all 0.50s linear;
    li a:hover {
      color: ${({ theme }) => theme.hover};
    }
    li a:focus {
      color: ${({ theme }) => theme.hover};
    }
  }
  body{
    
    #section1 {
      transition: all 0.50s linear;
      background-color: ${({ theme }) => theme.bg};

      div{
      color: ${({ theme }) => theme.text}; 
      }
      #flip div div {
        background: ${({ theme }) => theme.bgFlip1};
      }
      #flip div:first-child div {
        background: ${({ theme }) => theme.bgFlip2};
      }
      #flip div:last-child div {
        background: ${({ theme }) => theme.bgFlip3};
  }
    }
  } 
`;

export const Container = styled.div`
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
    font-weight: 500;
    transition: var(--trans, color 0.4s ease 0s);
    margin-left: 20px;
  }

  li:hover {
    color: ${GlobalStyles.hover};
  }
  li::selection {
    color: ${GlobalStyles.selection};
  }

  .ant-switch {
    background-color: ${themeDark.bg};
    border: solid 0.01px;
    border-color: ${themeDark.toggleBorder};

    .ant-switch-handle {
      top: 1px;
    }
  }

  span:first-of-type {
    margin-left: 20px;
  }

  button {
    margin: 0 5px;
  }
`;

export const Content1 = styled.div`
  background-color: ${themeLight.bgBlue};
`;

export const Section1 = styled.div`
  background-color: ${GlobalStyles.bg};
  width: 100%;
  height: 50vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  br {
    padding: 1px;
  }
  span {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 60px;
    text-align: left;
    margin: 1px;
  }
`;

export const Box = styled.div`
  text-align: center;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 56px;
  font-weight: bold;

  #criando {
    
  }

  #flip {
    height: 80px;
    overflow: hidden;
    margin: -25px;
    
  }

  #flip > div > div{
    color: ${GlobalStyles.text};
    text-align: center;
    height: 85px;
    width: 100%;
    display: inline-block;
    
  }

  #flip div:first-child {
    animation: show 5s linear infinite;
  }

  #flip div div {
    background: ${GlobalStyles.bgFlip1};
  }
  #flip div:first-child div {
    background: ${GlobalStyles.bgFlip2};
  }
  #flip div:last-child div {
    background: ${GlobalStyles.bgFlip3};
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.9% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  } 
`;
