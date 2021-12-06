import { useState, useEffect } from 'react';
import { StyledNavigation } from './styles';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const callback = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', callback);
    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, []);

  const openMenuHandler = () => setOpen(true);
  const closeMenuHandler = () => setOpen(false);
  return (
    <StyledNavigation scrolled={scrolled} open={open}>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo-container">
            <Logo scrolled={scrolled} />
          </div>
          <Navigation closed={closeMenuHandler} scrolled={scrolled} />
          <Sidebar closed={closeMenuHandler} open={open} />
          <Hamburger
            open={open}
            opened={openMenuHandler}
            closed={closeMenuHandler}
            scrolled={scrolled}
          />
        </div>
      </div>
    </StyledNavigation>
  );
}

export default Navbar;
