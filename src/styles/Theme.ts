import { DefaultTheme } from 'styled-components/macro'
import { createTheme } from '@mui/material/styles'

export const Theme = (): DefaultTheme => ({
    colors: {
        primary: '#FACD34',
        secondary: '#512F8B',
        success: '#218838',
        error: '#C82333',
        warning: '#E0A800',
        info: '#138496',
        light: '#F9F9F9',
        dark: '#112222',
        white: '#FFFFFF',
    },

    font: {
        size: {
            xxs: '8px',
            xs: '10px',
            sm: '12px',
            base: '14px',
            md: '16px',
            bg: '18px',
            lg: '24px',
            xl: '28px',
        },
    },

    boxShadow: {
        customMd: '0px 2px 4px #00000014;',
        customCard: '0px 4px 8px #00000029',
        input: '0px 4px 8px #00000014',
        transparent: '0 0 0 1px transparent',
    },

    fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
    },

    screens: {
        xs: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    borderRadius: {
        none: '0',
        xs: '2px',
        sm: '3px',
        md: '5px',
        lg: '10px',
        large: '12px',
    },
})

const theme = Theme()

export const themeMUI = createTheme({
    palette: {
        primary: {
            main: theme.colors.primary,
        },
        secondary: {
            main: theme.colors.secondary,
        },
        success: {
            main: theme.colors.success,
        },
        warning: {
            main: theme.colors.warning,
        },
        info: {
            main: theme.colors.info,
        },
        error: {
            main: theme.colors.error,
        },
    },
    typography: {
        fontFamily: [theme.fontFamily.montserrat, theme.fontFamily.helvetica].join(','),
    },
    breakpoints: {
        values: {
            xs: parseInt(theme.screens.xs.split('p')[0]),
            sm: parseInt(theme.screens.sm.split('p')[0]),
            md: parseInt(theme.screens.md.split('p')[0]),
            lg: parseInt(theme.screens.lg.split('p')[0]),
            xl: parseInt(theme.screens.xl.split('p')[0]),
        },
    },
})
