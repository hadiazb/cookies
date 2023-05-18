import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components/macro'
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles'

// base components
import { DefaultCtr, Navbar, Sidebar } from '../..'

// styles
import { StyledMainLayout } from './mainLayout-styles'
import { Theme, themeMUI, GlobalStyle } from '../../../styles'

// selectors
import { uiSelector, useSelector, authSelector } from '@/selectors'

// apis
import { interceptors } from '@/apis'

// store
import { AppDispatch } from '@/store/store'

// actions
import { onValidateToken } from '@/store/auth'

// utils
import { isAuthToken } from '@/utils'

// hooks
import { useAuthSession } from '@/hooks'

export type MainLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
    imageFullUrl?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, imageFullUrl }) => {
    const dispatch: AppDispatch = useDispatch()

    const theme = Theme()
    const { showSidebar } = useSelector(uiSelector)
    const { token } = useSelector(authSelector)

    const { route } = useRouter()

    useAuthSession()

    useEffect(() => {
        isAuthToken(token, () => {
            dispatch(onValidateToken())
        })
    }, [])

    interceptors(token)

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
