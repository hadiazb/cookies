import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { Custom404View } from '@/views'

const Custom404Page = (): ReactElement => {
    return <Custom404View />
}

export default Custom404Page

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="Page not fount" description="No hay nada que mostrar">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

Custom404Page.getLayout = getLayout
