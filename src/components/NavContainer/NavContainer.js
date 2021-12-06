import React from 'react';

function NavContainer({ closed }) {
  return (
    <ul>
      <li onClick={closed}>
        <a>About me</a>
      </li>
      <li onClick={closed}>
        <a>Skills</a>
      </li>
      <li onClick={closed}>
        <a>Portfolio</a>
      </li>
      <li onClick={closed} className="contact">
        <a href="#contact">CONTACT ME</a>
      </li>
    </ul>
  );
}

export default NavContainer;
