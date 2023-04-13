import { ReactElement } from 'react'

// components
import { MainLayout, MainStateLayout, ViewLayout } from '@/components'

// views
import { AddressView } from '@/views'

const AddressPage = (): ReactElement => {
    return <AddressView />
}

export default AddressPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="AddressPage" description="AddressPage description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

AddressPage.getLayout = getLayout
