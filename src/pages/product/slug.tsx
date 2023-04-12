import { ReactElement } from 'react'

// components
import { MainLayout, MainStateLayout, ViewLayout } from '@/components'

// views
import { ProductView } from '@/views'

// data base
import { initialData } from '@/db/products'

// interfaces
import { IProduct } from '@/interfaces'

const product = initialData.products[0]

const ProductPage = (): ReactElement => {
    return <ProductView product={product as IProduct} />
}

export default ProductPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title={product.title} description={product.description}>
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

ProductPage.getLayout = getLayout
