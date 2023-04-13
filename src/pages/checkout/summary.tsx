import { ReactElement } from 'react'

// components
import { MainLayout, MainStateLayout, ViewLayout } from '@/components'

// views
import { SummaryView } from '@/views'

const SummaryPage = (): ReactElement => {
    return <SummaryView />
}

export default SummaryPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="SummaryPage" description="SummaryPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

SummaryPage.getLayout = getLayout
