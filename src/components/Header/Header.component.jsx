import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './Header.styles.css';

function Fortune() {
  const text = 'Demo App! Welcome!';

  return <header className="fortune">{text} </header>;
}

export default Fortune;
