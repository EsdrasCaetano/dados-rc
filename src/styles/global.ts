import { createGlobalStyle } from "styled-components";
import amagro from '../assets/fonts/Amagro.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amagro';
    src: url(${amagro}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

    color: ${({ theme }) => theme.colors["brand-azul1"]};

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors["base-border"]}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors["brand-azul1"]};
      border-radius: 999px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors["brand-cinza"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    padding-bottom: 5rem;
  }
  
  html { 
    scroll-behavior: smooth;
  }
  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
  }

  ul {
    /* list-style: none; */
    text-align: left;
    width: 100%;
    
    li {
      color: ${({ theme }) => theme.colors["brand-azul1"]};
      font-weight: 600;
      border-bottom: 1px solid ${({ theme }) => theme.colors["brand-azul1"]};
      background-color: ${({ theme }) => theme.colors["base-title"]};
      padding: 0.5rem;
      border-radius: 8px;
      margin-top: .5rem;
      width: 100%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2 {
    /* font-family: 'Amagro'; */
    color: ${({ theme }) => theme.colors["brand-azul1"]};
    margin-top: 9rem;
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
  }
  h3 {
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    font-weight: 700;
  }
  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors["brand-azul1"]};
    font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: .1333333333vw;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors["brand-azul1"]};
    background: transparent;
    padding: .78125rem 2.0833333333rem;
    transition: all .3s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-azul1"]};
      color: ${({ theme }) => theme.colors["brand-cinza"]};
    }
  }

  button + button {
    margin-left: 2rem;
  }

  .selected {
    /* Adicione estilos para quando o botão estiver selecionado */
    background: ${({ theme }) => theme.colors["brand-azul1"]};
        color: ${({ theme }) => theme.colors["brand-cinza"]};
  }

  .closeButton {
    /* Estilos para o botão de fechar lista */
      /* color: ${({ theme }) => theme.colors["brand-azul1"]}; */
  }
  .backRef {
    margin-top: 1rem;
  }
`;