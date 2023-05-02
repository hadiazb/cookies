import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HomeView } from '@/views'

const CategoryKidPage = (): ReactElement => {
    return <HomeView title="Tienda" subtitle="Todos los productos para Niños" category="kid" />
}

export default CategoryKidPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title="Teslo - Shop - Kid"
            description="Encuentra los mejores productos de Teslo para niños aquí"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

CategoryKidPage.getLayout = getLayout
