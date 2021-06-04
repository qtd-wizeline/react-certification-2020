import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mockData from '../../../public/youtube-videos-mock.json';
import CardItem from '../../components/CardItem'
import Header from '../../components/Header';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();
  const trimmedArray = mockData;//.items.slice(0, 5);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

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
      <div className="cards">{trimmedArray.map((d) => CardItem(d))}</div>
    </section>

  );
}

export default HomePage;
