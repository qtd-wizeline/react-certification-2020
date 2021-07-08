import YoutubeVideosMock from '../mocks/youtube-videos-mock';

const initUser = {
  id: '',
  name: '',
  avatarUrl: '',
};

const initialState = {
  searchString: 'wizeline',
  searchResult: YoutubeVideosMock.items,
  user: initUser,
  isSideMenuOpen: false,
};

export function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case 'setSearchString':
      return { ...state, searchString: action.payload };
    case 'setSearchResult': {
      return { ...state, searchResult: action.payload };
    }
    case 'setLoggedInUser': {
      return { ...state, user: action.payload };
    }
    case 'logout': {
      return { ...state, user: initUser };
    }
    case 'openSideMenu': {
      return { ...state, isSideMenuOpen: true };
    }
    case 'closeSideMenu': {
      return { ...state, isSideMenuOpen: false };
    }
    default:
      throw new Error('Unknown action at global context reducer');
  }
}
