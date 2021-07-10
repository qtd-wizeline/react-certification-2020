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
    default:
      throw new Error('Unknown action');
  }
}
