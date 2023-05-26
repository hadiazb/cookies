import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { LoginView } from '@/views'

export type LoginPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginPage = (_props: LoginPageProps): ReactElement => {
    return <LoginView />
}

export default LoginPage

const getLayout = (page: ReactElement<LoginPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout title="LoginPage" description="LoginPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

LoginPage.getLayout = getLayout

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req, query } = ctx
    const { page = '/' } = query
    const session = await getSession({ req })

    if (session) {
        return {
            redirect: {
                destination: page.toString(),
                permanent: false,
            },
        }
    }

    return {
        props: {
            page: page.toString(),
        },
    }
}
