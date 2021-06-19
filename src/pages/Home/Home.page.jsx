import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import CardItem from '../../components/CardItem';
import LoadingSpinner from '../../components/LoadingSpinner';

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
  const [errors, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const apiKey = 'AIzaSyDCv2nlGl7NnX3F-ZHbq6u8WK6mazlsxPY';

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=hasanabi&type=video&videoType=any&key=${apiKey}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setResults(result);
          console.log(results);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(errors);
        }
      );
  }, [errors]);
  const sectionRef = useRef(null);
  // const trimmedArray = results.items;

  if (errors) {
    return <div>Error</div>;
  }

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <HomePageWrapper ref={sectionRef}>
      <Container>
        <Cards>{results.items.map((d) => CardItem(d))}</Cards>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
