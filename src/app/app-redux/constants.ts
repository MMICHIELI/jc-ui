import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { GlobalAppState } from './types';

/**
 * JCUI Global Constants
 */
export const breakPoints = {
  tablet: '@media only screen and (min-width: 601px) and (max-width: 959px)',
  mobile: '@media only screen and (max-width: 600px)'
};

export const PATHS = {
  dashboard: '/',
  theme: 'theme'
};

/**
 * App Themes Material
 */
export const THEMES = {
  PURPLE: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#6a1b9a',
      },
      secondary: {
        main: '#dce775'
      },
    }
  }),

  SAND: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#b2ebf2',
      },
      secondary: {
        main: '#b9f6ca',
      },
    },
  }),

  DUCK: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#00897b',
      },
      secondary: {
        main: '#673ab7', // deeppurple
      },
    },
  })
};

export const THEME_SPACING_UNIT = '8px';

export const INIT_APP_STATE: GlobalAppState = {
  theme: THEMES.SAND
};