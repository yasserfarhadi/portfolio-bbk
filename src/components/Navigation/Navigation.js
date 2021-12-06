import styled from 'styled-components';
import NavContainer from '../NavContainer/NavContainer';

const StyledNavigation = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      a {
        height: 100%;
        display: flex;
        align-items: center;
        color: ${(props) => (props.scrolled ? '#000' : '#fff')};
        padding: 0 25px;
        font-weight: 500;
        @media (min-width: 1200px) {
          padding: 0 40px;
        }
      }
      cursor: pointer;
      transition: transform 100ms linear;
      :active {
        transform: scale(0.95);
      }
    }
    .contact {
      all: unset;
      background-color: ${(props) => (props.scrolled ? '#000' : '#fff')};
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 50ms linear, color 200ms ease;
      :active {
        transform: scale(0.95);
      }
      a {
        font-weight: 600;
        color: ${(props) => (props.scrolled ? '#fff' : '#000')};
        transition: color 200ms ease;
      }
    }
  }
`;

function Navigation({ closed, scrolled }) {
  return (
    <StyledNavigation scrolled={scrolled}>
      <NavContainer closed={closed} />
    </StyledNavigation>
  );
}

export default Navigation;
