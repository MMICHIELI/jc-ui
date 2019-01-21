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
    theme: '/theme'
};

/**
 * App Themes Material
 */
export const THEMES = {
    PURPLE: {
        label: 'Purple',
        muiTheme: createMuiTheme({
            typography: {
                useNextVariants: true
            },
            palette: {
                primary: {
                    light: '#d952ff',
                    main: '#a200f7',
                    dark: '#6a00c3',
                    contrastText: '#FFF'
                },
                type: 'dark',
                secondary: {
                    light: '#FFFFA6',
                    main: '#DCE775',
                    dark: '#A8B545',
                    contrastText: '#000000'
                },
            }
        })
    },

    SAND: {
        label: 'Sand',
        muiTheme: createMuiTheme({
            typography: {
                useNextVariants: true
            },
            palette: {
                primary: {
                    light: '#E5FFFF',
                    main: '#B2EBF2',
                    dark: '#81B9BF',
                    contrastText: '#000000'
                },
                type: 'dark',
                secondary: {
                    light: '#ECFFFD',
                    main: '#b9f6ca',
                    dark: '#88C399',
                    contrastText: '#000000'
                },
            }
        })
    },

    DUCK: {
        label: 'Duck',
        muiTheme: createMuiTheme({
            typography: {
                useNextVariants: true
            },
            palette: {
                primary: {
                    light: '#4EBAAA',
                    main: '#00897b',
                    dark: '#005B4F',
                    contrastText: '#000000'
                },
                secondary: {
                    light: '#9A67EA',
                    main: '#673ab7', // deeppurple
                    dark: '#320B86',
                    contrastText: '#FFF'
                },
            }
        })
    },

    DARK_DUCK: {
        label: 'Dark Duck',
        muiTheme: createMuiTheme({
            typography: {
                useNextVariants: true
            },
            palette: {
                primary: {
                    light: '#5BE8D5',
                    main: '#00B5A4',
                    dark: '#00897b',
                    contrastText: '#000000'
                },
                type: 'dark',
                secondary: {
                    light: '#FFFFA6',
                    main: '#DCE775',
                    dark: '#A8B545',
                    contrastText: '#000000'
                },
            }
        })
    },

    ROSE: {
        label: 'Rose',
        muiTheme: createMuiTheme({
            typography: {
                useNextVariants: true
            },
            palette: {
                primary: {
                    light: '#FFEDDE',
                    main: '#FFBAAC',
                    dark: '#CA8A7D',
                    contrastText: '#000000'
                },
                type: 'dark',
                secondary: {
                    light: '#FFDC52',
                    main: '#FFAA16',
                    dark: '#C67B00',
                    contrastText: '#000000'
                }
            }
        })
    }
};

export const THEME_SPACING_UNIT = '8px';