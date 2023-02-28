/* eslint-disable @typescript-eslint/no-var-requires */
const { theme } = require('./src/styles/ThemeTW')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: theme.colors,
            fontSize: theme.font.size,
            fontFamily: theme.fontFamily,
            boxShadow: theme.boxShadow,
            screens: theme.screens,
            borderRadius: theme.borderRadius,
        },
    },
    plugins: [],
}
