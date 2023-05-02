/**
 * Montserrat fonts from @font-face
 */
export const getMontserratFont = (): string => `
    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
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
        font-family: 'Helvetica';
        src: url('/fonts/Helvetica-Light.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Helvetica';
        src: url('/fonts/Helvetica-Bold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
`
