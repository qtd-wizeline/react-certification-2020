import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/Video';
import VideoLayout from '../VideoLayout';
import LoginModal from '../LoginModal';

const BodyWrapperSwitch = styled(Switch)`
  position: fixed;
`;

function Body(props) {
  const { searchTerm } = props;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <BodyWrapperSwitch location={background || location}>
        <Route exact path="/">
          <Layout>
            <HomePage search={searchTerm} />
          </Layout>
        </Route>
        <Route path='/login' component={LoginModal} />
        <Route path="/video/:video_id">
          <VideoLayout>
            <Video />
          </VideoLayout>
        </Route>
        <Route exact path="*">
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </BodyWrapperSwitch>
      {background && <Route path='/login' component={LoginModal} />}
    </>
  );
}

export default Body;
