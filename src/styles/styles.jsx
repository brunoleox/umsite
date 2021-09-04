import styled, { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

export const themeLight = {
  bg: "#3d9be9",
  text: "#fff",
  hover: "#000",
  toggleBorder: "#fff",
  bgFlip1: "#2a9d8f",
  bgFlip2: "#023047",
  bgFlip3: "#9d0208",
  bgSection2: "#98C8F0",
  bgSection3: "#169288",
  bgSection4: "#FFF",
  textSection4: "#000",
  textTitleSection2: "#1b1b1e",
};

export const themeDark = {
  bg: "#363537",
  text: "#fff",
  hover: "#003566",
  selection: "${themelight.bg}",
  toggleBorder: "#6B8096",
  bgFlip1: "#495057",
  bgFlip2: "#003566",
  bgFlip3: "#540b0e",
  bgSection2: "#495057",
  bgSection3: "#354f52",
  bgSection4: "#000",
  textSection4: "#fff",
  textTitleSection2: "#fff",
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
    #section2 {
      transition: all 0.50s linear;
      background-color: ${({ theme }) => theme.bgSection2};
      transition: all 0.50s linear;
      color: ${({ theme }) => theme.textTitleSection2}; 
    }
    #section3 {
      transition: all 0.50s linear;
      background-color: ${({ theme }) => theme.bgSection3};
      transition: all 0.50s linear;
      color: ${({ theme }) => theme.text}; 
    }
    #section4 {
      transition: all 0.50s linear;
      background-color: ${({ theme }) => theme.bgSection4};
      transition: all 0.50s linear;
      color: ${({ theme }) => theme.textSection4}; 
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

export const Navbar = styled.div`
  color: ${GlobalStyles.text};
  display: flex;
  flex-direction: row;
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

  #flip {
    height: 80px;
    overflow: hidden;
    margin: -25px;
  }

  #flip > div > div {
    color: ${GlobalStyles.text};
    text-align: center;
    height: 85px;
    width: 100%;
    display: inline-block;
    padding: 0 20px;
  }

  #flip div:first-child {
    animation: show 8s linear infinite;
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

export const Section2 = styled.div`
  align-items: flex-start;
  background-color: ${GlobalStyles.bgSection2};
  color: ${GlobalStyles.textTitleSection2};
  display: flex;
  height: 510px;
  justify-content: center;
  min-width: 1024px;
  padding: 100px 200px;
  width: 100%;

  #title {
    font-size: 80px;
    line-height: 0.9em;
    max-width: 170px;
    text-align: left;
  }

  #servicos {
    margin-top: 50px;
    max-width: 1080px;
    width: auto;

    div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    svg {
      width: 25px;
      height: 25px;
    }

    span {
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.1em;
      margin-left: 10px;
      text-align: left;
    }
  }
`;
export const Section3 = styled.div`
  align-items: flex-start;
  background-color: ${GlobalStyles.bgSection3};
  color: ${GlobalStyles.textTitleSection2};
  display: flex;
  flex-direction: column;
  height: 510px;
  justify-content: center;
  min-width: 1024px;
  padding: 100px 400px;
  width: 100%;

  #title {
    font-size: 80px;
    font-weight: bold;
    line-height: 0.9em;
    max-width: 170px;
    text-align: left;
  }

  #subtitle {
    margin-top: 50px;
    font-size: 1.3rem;
    text-align: justify;
    max-width: 980px;
  }
`;
export const Section4 = styled.div`
  align-items: flex-start;
  background-color: ${GlobalStyles.bgSection4};
  color: ${GlobalStyles.textTitleSection2};
  display: flex;
  flex-direction: column;
  height: 510px;
  min-width: 1024px;
  padding: 100px 400px;
  width: 100%;

  #title {
    font-size: 80px;
    font-weight: bold;
    line-height: 0.9em;
    max-width: 170px;
    text-align: left;
  }

  #subtitle {
    margin-top: 50px;
    font-size: 1.3rem;
    text-align: justify;
    max-width: 980px;
  }

  #grid {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    height: 1100px;
    max-width: 980px;
    margin-top: 20px;
    grid-template-areas:
      "predrisa cianport"
      "gpsantos imperial"
      "inversol agn";
    width: 100%;
  }


`;
