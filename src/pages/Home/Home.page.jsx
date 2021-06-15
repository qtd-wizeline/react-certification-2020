import React, { useRef } from 'react';
import styled from 'styled-components';

import './Home.styles.css';
import mockData from '../../mock/youtube-videos-mock.json';
import CardItem from '../../components/CardItem';

const HomePageWrapper = styled.section`
  text-align: center;
  overflow: auto;

  & > h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin: 3px;
  padding: 20px;
  overflow: auto;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  overflow: auto;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const trimmedArray = mockData.items;

  return (
    <HomePageWrapper ref={sectionRef}>
      <Container>
        <Cards>{trimmedArray.map((d) => CardItem(d))}</Cards>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
