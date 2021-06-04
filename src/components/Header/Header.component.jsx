import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './Header.styles.css';

function Header() {
  const text = 'Demo App! Welcome!';

  return (
    <header className="header">
      <div>
        <button className="button-left">Navigation</button>
        <input disabled />
        <button className="button-right">Login</button>
      </div>
    </header>
  );
}

export default Header;
