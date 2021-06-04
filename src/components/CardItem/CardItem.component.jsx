import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';

function Header(item) {
  const text = 'Demo App! Welcome!';

  return (
    <div>
      <a>{item.snippet.title}</a>
      {/* <p>{item.snippet.description}</p>  */}
    </div>
  );
}

export default Header;
