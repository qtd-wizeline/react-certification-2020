export const themes = {
  dark: {
    NavHeadBackground: '#4e0505',
    ContentFontColor: 'white',
    CardBackground: '#4e0505',
  },
  light: {
    NavHeadBackground: '#d84c4a',
    ContentFontColor: 'black',
    CardBackground: 'white',
  },
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCHTERM': {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case 'SET_VIDEOSELECTED': {
      return {
        ...state,
        videoSelected: action.payload,
      };
    }
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: state.theme === themes.light ? themes.dark : themes.light,
      };
    }
    default:
      throw new Error('Unknown action');
  }
}
