import styled, { createGlobalStyle } from 'styled-components';

export const BGColor = '#d7d7d7';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #d7d7d7
  }

  html {
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body, #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
    display: block
  };
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  };
  input::-webkit--internal-autofill-selected {
  appearance: none;
  background-color: rgb(232, 240, 254) !important;
  background-image: none !important;
}
`;

export const StyledContainer = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
