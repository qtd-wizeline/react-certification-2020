import React from 'react';

const YoutubeVideosContext = React.createContext({
  searchTerm: 'wizeline',
  setSearchTerm: () => {},
  videoSelected: {
    id: '',
    title: '',
    description: '',
  },
  setVideoSelected: () => {},
});

export default YoutubeVideosContext;
