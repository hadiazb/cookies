import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components/macro'
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles'

// base components
import { DefaultCtr, Navbar, Sidebar } from '../..'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, themeMUI, GlobalStyle } from '../../../styles'

// selectors
import { uiSelector, useSelector } from '@/selectors'

export type MainLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
    imageFullUrl?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, imageFullUrl }) => {
    const theme = Theme()
    const { showSidebar } = useSelector(uiSelector)

    const { route } = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />
                {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <ThemeProviderMUI theme={themeMUI}>
                    <GlobalStyle reset />
                    {!['/auth/login', '/auth/register'].includes(route) && (
                        <>
                            <Navbar />
                            <Sidebar showSidebar={showSidebar} />
                        </>
                    )}
                    <StyledMainLayout>
                        <DefaultCtr>{children}</DefaultCtr>
                    </StyledMainLayout>
                </ThemeProviderMUI>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
