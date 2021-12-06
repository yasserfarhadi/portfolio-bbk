import styled from 'styled-components';
import logo from '../../assets/logo.png';
import whiteLogo from '../../assets/logo-white.png';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  content: url(${(props) => (props.scrolled ? logo : whiteLogo)});
  @media (min-width: 1000px) {
    content: url(${logo});
  }
`;

function Logo({ scrolled }) {
  return (
    <a href="#hero">
      <StyledImage scrolled={scrolled} />
    </a>
  );
}

export default Logo;
