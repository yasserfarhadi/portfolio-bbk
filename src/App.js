import { useEffect } from 'react';

import { GlobalStyles } from './GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './containers/Hero/Hero';
import More from './containers/More/More';
import Contact from './containers/Contact/Contact';

function App() {
  useEffect(() => {
    (() => {
      const html = document.getElementsByTagName('html')[0];
      if (html.scrollWidth > html.clientWidth) {
        html.style.marginRight = -(html.offsetWidth - html.clientWidth) + 'px';
      }
    })();
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <More />
      <Contact />
    </div>
  );
}

export default App;
