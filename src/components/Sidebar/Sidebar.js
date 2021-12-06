import NavContainer from '../NavContainer/NavContainer';
import styled from 'styled-components';

const StyledSidebarContainer = styled.div`
  position: absolute;
  top: 103%;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: transform 200ms ease;
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-150%)')};
  background-color: rgba(0, 0, 0, 0.6);
  ul {
    list-style-type: none;
    li {
      a {
        display: block;
        padding: 25px 0px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        font-weight: 600;
      }
    }
    .contact {
      background-color: #fff;
      a {
        color: #000;
      }
    }
  }
`;

function Sidebar({ open, closed }) {
  return (
    <StyledSidebarContainer open={open}>
      <NavContainer closed={closed} />
    </StyledSidebarContainer>
  );
}

export default Sidebar;
