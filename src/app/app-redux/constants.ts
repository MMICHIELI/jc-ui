import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/**
 * JCUI Global Constants
 */
export const breakPoints = {
  tablet: '@media only screen and (min-width: 601px) and (max-width: 959px)',
  mobile: '@media only screen and (max-width: 600px)'
};

export const PATHS = {
  dashboard: '/',
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
      type: 'dark',
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
      type: 'dark',
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
      type: 'dark',
      primary: {
        main: '#00897b',
      },
      secondary: {
        main: '#673ab7', // deeppurple
      },
    },
  })
};