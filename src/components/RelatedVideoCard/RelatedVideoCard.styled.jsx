import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const StyledRelatedVideoCard = styled(Link)`
  text-decoration: none;
`;

export const RelatedVideoThumbnail = styled.div`
  height: 200px;
  width: 100%;
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${breakpoints.md}) {
    height: 128px;
  }
`;

export const RelatedVideoMeta = styled.div``;

export const RelatedVideoMetaTitle = styled.p`
  color: ${(props) => props.theme.text};
`;
