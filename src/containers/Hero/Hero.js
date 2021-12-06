import Introduce from '../../components/Introduce/Introduce';
import Media from '../../components/Media/Media';
import HeroImage from '../../components/HeroImage/HeroImage';

import { StyledHero } from './styles';

function Hero() {
  return (
    <StyledHero id="hero">
      <div className="container">
        <div className="gray-bg"></div>
        <div className="black-bg"></div>
        <Introduce />
        <Media />
        <HeroImage />
        <div className="overlay"></div>
      </div>
    </StyledHero>
  );
}

export default Hero;
