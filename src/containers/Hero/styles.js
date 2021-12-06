import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .container {
    position: relative;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media (min-width: 1000px) {
      width: 90%;
    }
  }
  .gray-bg {
    position: absolute;
    top: 65%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #d7d7d7;
    transform: skew(0deg, -15deg);
    @media (min-width: 750px) {
      transform: skew(0deg, -10deg);
    }
    @media (min-width: 1000px) {
      top: 0;
      z-index: 1;
    }
    ::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: 4;
      background-color: #000;
      @media (min-width: 900px) {
        width: 45%;
      }
      @media (min-width: 1000px) {
        display: none;
      }
    }
  }
  .black-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 1;
    @media (min-width: 1000px) {
      transform: skew(-10deg, 0deg);
      left: 38%;
    }
    @media (min-width: 1400px) {
      left: 45%;
    }
    /* transform: skew(-10deg, 0deg); */
  }

  .overlay {
    position: absolute;
    top: 65%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transform: skew(0deg, -15deg);
    @media (min-width: 750px) {
      transform: skew(0deg, -10deg);
    }
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;
