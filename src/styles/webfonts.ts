/**
 * Montserrat fonts from @font-face
 */
export const getMontserratFont = (): string => `
    @font-face {
        src: url('./fonts/Montserrat-Medium.ttf') format('woff2');
        font-family: 'Montserrat';
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url('./fonts/Montserrat-Regular.ttf') format('woff2');
        font-family: 'Montserrat';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url('./fonts/Montserrat-SemiBold.ttf') format('woff2');
        font-family: 'Montserrat';
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url('./fonts/Montserrat-Bold.ttf') format('woff2');
        font-family: 'Montserrat';
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url('./fonts/Montserrat-ExtraBold.ttf') format('woff2');
        font-family: 'Montserrat';
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
`
/**
 * Helvetica fonts from @font-face
 */
export const getHelveticaFont = (): string => `
    @font-face {
        src: url('./fonts/Helvetica-Light.ttf') format('woff2');
        font-family: 'Helvetica';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        src: url('./fonts/Helvetica-Bold.ttf') format('woff2');
        font-family: 'Helvetica';
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
`
