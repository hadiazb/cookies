import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { ProductsView } from '@/views'

const ProductsPage = (): ReactElement => {
    return <ProductsView />
}

export default ProductsPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="ProductsPage" description="ProductsPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

ProductsPage.getLayout = getLayout
