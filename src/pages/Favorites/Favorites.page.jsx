import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import CardItem from '../../components/CardItem';
import { AccountContext } from '../../contexts/AccountContextProvider';

const FavoritesPageWrapper = styled.section`
  text-align: center;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

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
  align-items: center;
`;

function FavoritesPage() {
  const loggedInContext = useContext(AccountContext);

  // eslint-disable-next-line no-unused-vars
  const [favVids, setFavVids] = useState(loggedInContext.favoriteVideos);

  const hasFavVids = !favVids;

  if (hasFavVids) {
    return <div>You haven&apos;t added any favorite videos yet!</div>;
  }

  return (
    <FavoritesPageWrapper>
      <Container>
        <Cards>
          {favVids.map((d) => {
            return <CardItem item={d} fav />;
          })}
        </Cards>
      </Container>
    </FavoritesPageWrapper>
  );
}

export default FavoritesPage;
