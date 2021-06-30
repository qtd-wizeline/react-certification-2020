import React from 'react';
import {
  StyledRelatedVideoCard,
  RelatedVideoThumbnail,
  RelatedVideoMeta,
  RelatedVideoMetaTitle,
} from './RelatedVideoCard.styled';

export default function RelatedVideoCard(props) {
  const { videoId, thumbnail, title } = props;
  return (
    <StyledRelatedVideoCard key={videoId} to={`/video/${videoId}`}>
      <RelatedVideoThumbnail thumbnail={thumbnail} />
      <RelatedVideoMeta>
        <RelatedVideoMetaTitle>{title}</RelatedVideoMetaTitle>
      </RelatedVideoMeta>
    </StyledRelatedVideoCard>
  );
}
