import themes from '../configs/themes';

const initState = {
  theme: themes.dark,
};

export function ThemeReducer(state = initState, action) {
  switch (action.type) {
    case 'toggle': {
      if (state.theme.name === 'dark') {
        return {
          theme: themes.light,
        };
      }
      return {
        theme: themes.dark,
      };
    }
    default:
      throw new Error('Unknown action at global context reducer');
  }
}
