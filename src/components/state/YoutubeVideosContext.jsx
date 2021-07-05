import React from 'react';

const YoutubeVideosContext = React.createContext({
  searchTerm: 'wizeline',
  setSearchTerm: () => {},
});

export default YoutubeVideosContext;
