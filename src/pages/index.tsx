import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HomeView } from '@/views'

const HomePage = (): ReactElement => {
    return <HomeView title="Tienda" subtitle="Todos los productos" />
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title="Teslo - Shop - Home"
            description="Encuentra los mejores productos de Teslo aquí"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

HomePage.getLayout = getLayout
