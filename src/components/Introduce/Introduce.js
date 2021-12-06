import styled from 'styled-components';

const StyledIntroduce = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: 4;
  color: #fff;
  h3 {
    font-size: 22px;
  }
  h1 {
    font-size: 30px;
  }
  h4 {
    font-size: 18px;
  }

  @media (min-width: 1000px) {
    top: 35%;
    left: 0;
    color: #000;
    h3 {
      font-size: 28px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 18px;
      color: #909090;
    }
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 35px;
    }
    h1 {
      font-size: 50px;
    }
    h4 {
      font-size: 22px;
    }
  }
  @media (min-width: 1400px) {
    h3 {
      font-size: 40px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 60px;
      margin-bottom: 15px;
    }
    h4 {
      font-size: 30px;
      color: #909090;
    }
  }
`;

function Introduce() {
  return (
    <StyledIntroduce>
      <h3>Hi i'm</h3>
      <h1>Yasser Farhadi</h1>
      <h4>Front-end Developer/UI Designer</h4>
    </StyledIntroduce>
  );
}

export default Introduce;
