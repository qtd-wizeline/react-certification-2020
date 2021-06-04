import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './Header.styles.css';

function Header() {
  const text = 'Demo App! Welcome!';

  return (
    <head className="header">
      <div>
        <button className="button-left">Navigation</button>
        <div>
          <input disabled />
        </div>
        <button className="button-right">Login</button>
      </div>
    </head>
  );
}

export default Header;
