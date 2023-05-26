/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { RegisterView } from '@/views'

export type RegisterPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const RegisterPage = (_props: RegisterPageProps): ReactElement => {
    return <RegisterView />
}

export default RegisterPage

const getLayout = (page: ReactElement<RegisterPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout title="RegisterPage" description="RegisterPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

RegisterPage.getLayout = getLayout

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
