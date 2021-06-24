import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';

import './Home.styles.css';

function HomePage() {
  const [input, setInput] = useState('wizeline');

  const updateInput = async (search) => {
    console.log('UpdateInput: ', search);
    setInput(search);
  };

  return (
    <>
      <Header updateInput={updateInput} />
      <Content input={input} />
    </>
  );
}

export default HomePage;
