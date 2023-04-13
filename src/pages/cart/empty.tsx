import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { EmptyView } from '@/views'

const EmptyPage = (): ReactElement => {
    return <EmptyView />
}

export default EmptyPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="EmptyPage" description="EmptyPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

EmptyPage.getLayout = getLayout
