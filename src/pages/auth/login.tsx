import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { LoginView } from '@/views'

const LoginPage = (): ReactElement => {
    return <LoginView />
}

export default LoginPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="LoginPage" description="LoginPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

LoginPage.getLayout = getLayout
