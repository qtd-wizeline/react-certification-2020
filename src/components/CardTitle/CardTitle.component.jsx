import React from 'react';
import styled from 'styled-components';

// import { useFortune } from '../../utils/hooks/useFortune';
import CardTitleText from '../CardTitleText';

const CardTitle = styled.div`
  margin: 1px;
  height: 56px;
`;

function Component(props) {
  return (
    <CardTitle>
      <CardTitleText text={props.text} />
    </CardTitle>
  );
}

export default Component;
