import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { CheckoutView } from '@/views'

const CheckoutPage = (): ReactElement => {
    return <CheckoutView />
}

export default CheckoutPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="CheckoutPage" description="CheckoutPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

CheckoutPage.getLayout = getLayout
