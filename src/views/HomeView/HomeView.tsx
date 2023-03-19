import { ReactElement } from 'react'

// components
import { Typography } from '@/components'

const HomeView = (): ReactElement => {
    return (
        <>
            <Typography variant="h1">Tienda</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
        </>
    )
}

export default HomeView
