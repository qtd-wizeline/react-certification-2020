import YoutubeVideosMock from '../mocks/youtube-videos-mock';

const initialState = {
  searchString: 'wizeline',
  searchResult: YoutubeVideosMock.items,
};

export function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case 'setSearchString':
      return { ...state, searchString: action.payload };
    case 'setSearchResult': {
      return { ...state, searchResult: action.payload };
    }
    default:
      throw new Error('Unknown action at global context reducer');
  }
}
