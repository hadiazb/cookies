import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { OrderView } from '@/views'

const OrderPage = (): ReactElement => {
    return <OrderView />
}

export default OrderPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="OrderPage" description="OrderPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

OrderPage.getLayout = getLayout
