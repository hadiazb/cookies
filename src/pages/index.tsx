import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HomeView } from '@/views'

const HomePage = (): ReactElement => {
    return <HomeView />
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="Style Guy" description="Style Guy description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

HomePage.getLayout = getLayout
