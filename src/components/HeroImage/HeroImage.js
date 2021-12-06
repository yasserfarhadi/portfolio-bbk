import styled from 'styled-components';

import photo from '../../assets/Hero.png';

const StyledImageContainer = styled.div`
  position: absolute;
  padding-top: 90px;
  right: -25%;
  top: 0;
  width: 112%;
  height: 100%;
  z-index: 2;
  font-size: 0;
  @media (min-width: 1000px) {
    padding-top: 120px;
  }
  @media (min-width: 1170px) {
    right: -20%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    float: right;
  }
`;

function HeroImage() {
  return (
    <StyledImageContainer>
      <img src={photo} />
    </StyledImageContainer>
  );
}

export default HeroImage;
