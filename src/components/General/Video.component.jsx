import React, { useState } from 'react';
import { Card } from 'antd';

import './Video.style.css';

const { Meta } = Card;

export function VideoCard({ item }) {
  const [video] = useState(item);

  return (
    <div className="video-card">
      <Card
        hoverable
        style={{ width: 345 }}
        cover={
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
            style={{ maxHeight: '194px', width: 'auto', margin: 'auto' }}
          />
        }
      >
        <Meta title={video.snippet.title} description={video.snippet.description} />
      </Card>
    </div>
  );
}
