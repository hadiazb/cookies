import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { SearchView } from '@/views'

const SearchPage = (): ReactElement => {
    return <SearchView title="Buscar producto" subtitle="ABC --- 123" path="search" />
}

export default SearchPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="Teslo-Shop" description="Encuentra los mejores productos de Teslo aquí">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

SearchPage.getLayout = getLayout
