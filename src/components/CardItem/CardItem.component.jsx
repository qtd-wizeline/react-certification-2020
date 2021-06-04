import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';

function Header(item) {
  const text = 'Demo App! Welcome!';

  return (
    <div>
      <h2>{item.snippet.title}</h2>
      {/* <p>{item.snippet.description}</p>  */}
    </div>
  );
}

export default Header;
