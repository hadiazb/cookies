import { ReactElement } from 'react'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { RegisterView } from '@/views'

const RegisterPage = (): ReactElement => {
    return <RegisterView />
}

export default RegisterPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="RegisterPage" description="RegisterPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

RegisterPage.getLayout = getLayout
