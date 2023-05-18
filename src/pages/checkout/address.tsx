import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

// components
import { MainLayout, MainStateLayout, ViewLayout } from '@/components'

// views
import { AddressView } from '@/views'

// utils
import { verifyJwt } from '@/utils'

export type AddressPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const AddressPage = (): ReactElement => {
    return <AddressView />
}

export default AddressPage

const getLayout = (page: ReactElement<AddressPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout title="AddressPage" description="AddressPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

AddressPage.getLayout = getLayout

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req } = ctx
    const { token = '' } = req.cookies

    let isValidToken = false

    try {
        await verifyJwt(token)
        isValidToken = true
    } catch (error) {
        isValidToken = false
    }

    if (!isValidToken) {
        return {
            redirect: {
                destination: '/auth/login?page=/checkout/address',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}
