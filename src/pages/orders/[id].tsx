/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { OrderView } from '@/views'
import { getSession } from 'next-auth/react'
import { getOrderById } from 'database'

export type OrderPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const OrderPage = (props: OrderPageProps): ReactElement => {
    return <OrderView id={props.id} order={props.order} />
}

export default OrderPage

const getLayout = (page: ReactElement<OrderPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title={`Orden #${page.props.id}`}
            description={`Descripción de la orden ${page.props.id}`}
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { req, query } = ctx
    const { id = '' } = query

    const session: any = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: `/auth/login?page=/orders/${id}`,
                permanent: false,
            },
        }
    }

    const order = await getOrderById(id.toString())

    if (!order) {
        return {
            redirect: {
                destination: '/orders/history',
                permanent: false,
            },
        }
    }

    if (order.user !== session.user._id) {
        return {
            redirect: {
                destination: '/orders/history',
                permanent: false,
            },
        }
    }

    return {
        props: {
            id: id.toString(),
            order,
        },
    }
}

OrderPage.getLayout = getLayout
