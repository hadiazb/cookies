import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { HistoryOrdersView } from '@/views'

const HistoryPage = (): ReactElement => {
    return <HistoryOrdersView />
}

export default HistoryPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="HistoryPage" description="HistoryPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

HistoryPage.getLayout = getLayout
