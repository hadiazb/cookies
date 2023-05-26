/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react'
import { getSession } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HistoryOrdersView } from '@/views'
import { getOrdersByUser } from 'database'

export type HistoryPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const HistoryPage = (props: HistoryPageProps): ReactElement => {
    return <HistoryOrdersView orders={props.orders} />
}

export default HistoryPage

const getLayout = (page: ReactElement<HistoryPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title="Historial de ordenes"
            description="Aca puedes ver el historial de ordenes"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session: any = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login?p=/orders/history',
                permanent: false,
            },
        }
    }

    const orders = await getOrdersByUser(session.user._id)

    return {
        props: {
            orders,
        },
    }
}

HistoryPage.getLayout = getLayout
