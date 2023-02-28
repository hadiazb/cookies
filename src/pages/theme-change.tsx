import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { ThemeChange } from '@/views'

const ThemeChangePage = (): ReactElement => {
    return <ThemeChange />
}

export default ThemeChangePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="ThemeChangePage" description="ThemeChangePage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

ThemeChangePage.getLayout = getLayout
