import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { CartView } from '@/views'

const CartPage = (): ReactElement => {
    return <CartView />
}

export default CartPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="CartPage" description="CartPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

CartPage.getLayout = getLayout
