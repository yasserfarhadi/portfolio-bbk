import styled from 'styled-components';

const StyledIt = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%);
  z-index: -1;
  /* top: 50%;
  left: 50%;
  transform: translateY(-50%, -50%); */
  @media (min-width: 700px) {
    left: unset;
    right: 0px;
  }
  .logo {
    width: 300px;
    position: relative;
    /* flex-grow: 1; */
    /* right: 40px;
    top: 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    .it {
      border: 25px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 220px;
      line-height: 320px;
      font-weight: 500;
      border-top-right-radius: 100px;
      border-bottom-left-radius: 100px;
      padding: 0 50px;
      transform-origin: 0 0;
      /* transform: rotate(30deg) translate(20%, -40%); */
    }
    @media (max-width: 1170px) {
      .left-elipse {
        position: absolute;
        top: 0;
        left: 10%;
        background-color: #000;
        width: 120px;
        height: 75px;
        border-radius: 50%;
        z-index: 1;
        /* transform-origin: 0 0; */
        transform: rotate(60deg) translate(-50%, -50%);
      }
      .right-elipse {
        position: absolute;
        top: -3%;
        right: 20%;
        background-color: #000;
        width: 150px;
        height: 90px;
        border-radius: 50%;
        z-index: 1;
        transform-origin: 0 0;
        transform: rotate(-60deg);
      }
    }
  }
  @media (min-width: 1170px) {
    top: 10%;
    transform: translateY(0);
    margin: 0;
    right: 10%;
    transform-origin: center center;
    transform: rotate(20deg);
    .logo {
      .top-elipse {
        position: absolute;
        top: -95%;
        right: 20%;
        width: 100%;
        height: 100%;
        background-color: #000;
        border-top-right-radius: 100px;
        border-bottom-right-radius: 80px;
      }
    }
  }
`;

function ITLogo() {
  return (
    <StyledIt>
      <div className="logo">
        <div className="left-elipse"></div>
        <div className="right-elipse"></div>
        <div className="top-elipse"></div>
        <div className="it">IT</div>
      </div>
    </StyledIt>
  );
}

export default ITLogo;
