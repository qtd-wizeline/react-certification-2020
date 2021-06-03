import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './Header.styles.css';

function Header() {
  const text = 'Demo App! Welcome!';

  return <header className="header">{text} </header>;
}

export default Header;
