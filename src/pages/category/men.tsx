import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HomeView } from '@/views'

const CategoryMenPage = (): ReactElement => {
    return <HomeView title="Tienda" subtitle="Todos los productos para Hombres" category="men" />
}

export default CategoryMenPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title="Teslo - Shop - Men"
            description="Encuentra los mejores productos de Teslo para hombres aquí"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

CategoryMenPage.getLayout = getLayout
