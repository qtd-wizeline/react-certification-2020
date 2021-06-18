import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const VideoCardBase = styled.div`
  border-radius: 5px;
  margin: 8px;
  background-color: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const VideoCardThumbnail = styled.div`
  height: 188px;
  width: 100%;
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (min-width: ${breakpoints.md}) {
    height: 144px;
  }
`;

export const VideoCardInfo = styled.div`
  max-width: 100%;
  margin: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 144px;
  h5 {
    margin: 0 0 8px 0;
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
    text-overflow: ellipsis;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
    color: ${(props) => props.theme.text};
    text-align: justify;
  }
  @media (min-width: ${breakpoints.md}) {
    height: 256px;
  }
`;
