import styled from 'styled-components';
import ITLogo from '../../components/ITLogo/ITLogo';

const StyledMore = styled.div`
  position: relative;
  width: 100%;
  min-height: 750px;
  padding: 100px 0;
  background: linear-gradient(
    90.18deg,
    #1d1d1d 31.59%,
    #1d1d1d 90.35%,
    #1d1d1d 90.35%
  );
  z-index: -2;
  @media (min-width: 600px) {
    padding-bottom: 40px;
  }
  @media (min-width: 1170px) {
    min-height: auto;
    padding: 20px;
  }
  .text-container {
    width: 500px;
    margin: 0 auto;
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: absolute; */
    /* top: 15%;
    left: 0; */
    /* transform: translateY(-50%, -50%); */
    /* width: 100%; */
    height: 60%;
    z-index: 10;

    @media (min-width: 700px) {
      margin-left: 0;
      margin-right: auto;
    }

    h2 {
      font-size: 50px;
      color: #fff;
      text-align: center;
      margin-bottom: 50px;
    }
    .text {
      color: #fff;
      margin-bottom: 70px;
      text-align: justify;
      line-height: 30px;
    }
    button {
      all: unset;
      border-right: 2px solid #fff;
      border-left: 2px solid #fff;
      padding: 10px 20px;
      color: #fff;
      transition: transform 50ms linear;
      cursor: pointer;
      :active {
        transform: scale(0.95);
      }
    }
    @media (min-width: 1170px) {
      width: 65%;
      align-items: flex-start;
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      .text {
        margin-bottom: 20px;
      }
    }
  }

  /* .text-section {
    width: 70%;
    h2 {
      color: #fff;
      margin-bottom: 50px;
    }
    .text {
      color: #fff;
      margin-bottom: 40px;
    }
    button {
      all: unset;
      border-right: 2px solid #fff;
      border-left: 2px solid #fff;
      padding: 10px 20px;
      color: #fff;
      transition: transform 50ms linear;
      cursor: pointer;
      :active {
        transform: scale(0.95);
      }
    } */
`;

function More() {
  return (
    <StyledMore>
      <div className="container">
        <ITLogo />
        <div className="text-container">
          <h2>IT BERRIES</h2>
          <div className="text">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </div>
          <button>REED MORE</button>
        </div>
      </div>
    </StyledMore>
  );
}

export default More;
