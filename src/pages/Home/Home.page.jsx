import React from 'react';

import { HeaderBar, Content } from '../../components/Layout/index';
import './Home.styles.css';

function HomePage() {
  return (
    <div className="homepage">
      <HeaderBar />
      <Content />
    </div>
  );
}

export default HomePage;
