import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HomeView } from '@/views'

const CategoryWomenPage = (): ReactElement => {
    return <HomeView title="Tienda" subtitle="Todos los productos para Mujeres" category="women" />
}

export default CategoryWomenPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title="Teslo - Shop - Women"
            description="Encuentra los mejores productos de Teslo para mujeres aquí"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

CategoryWomenPage.getLayout = getLayout
