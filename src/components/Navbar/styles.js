import styled from 'styled-components';

export const StyledNavigation = styled.div`
  background-color: ${(props) => (props.scrolled ? '#fff' : 'none')};
  height: 120px;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 1000;
  transition: background-color 200ms ease;
  border-bottom: ${(props) => (props.open ? '2px solid #fff' : 'none')};
  box-shadow: ${(porps) =>
    porps.scrolled ? '6px 5px 27px -3px rgba(0,0,0,0.49)' : 'none'};

  @media (max-width: 1000px) {
    height: 90px;
  }
  .nav-container {
    width: 100%;
    max-width: 1350px;
    @media (min-width: 1000px) {
      margin: 0 auto;
      width: 90%;
    }
    .navbar {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .bars {
        cursor: pointer;
        margin-right: 40px;
        @media (min-width: 1000px) {
          display: none;
        }
      }
      .logo-container {
        width: 60px;
        height: 60px;
        margin-left: 40px;
        @media (min-width: 1000px) {
          margin-left: 0;
        }
      }
    }
  }
`;
