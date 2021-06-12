import React, { useRef } from 'react';

import './Home.styles.css';
import mockData from '../../mock/youtube-videos-mock.json';
import CardItem from '../../components/CardItem';

function HomePage() {
  const sectionRef = useRef(null);
  const trimmedArray = mockData.items;

  return (
    <section className="homepage" ref={sectionRef}>
      {/* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
      <div className="container">
        <div className="cards">{trimmedArray.map((d) => CardItem(d))}</div>
      </div>
    </section>
  );
}

export default HomePage;
