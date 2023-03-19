import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { AuthView } from '@/views'

const AuthPage = (): ReactElement => {
    return <AuthView />
}

export default AuthPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="AuthPage" description="AuthPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

AuthPage.getLayout = getLayout
