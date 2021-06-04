import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';

function Header(item) {
  const text = 'Demo App! Welcome!';

  return (
    <div className="card-item">
      <h4>{item.snippet.title}</h4>
      <img 
        src={item.snippet.thumbnails.default.url} 
      />
      <p>{item.snippet.description}</p> 
    </div>
  );
}

export default Header;
