import { ReactElement } from 'react'

// components
import { Typography, Box, ProductList } from '@/components'

// Data Base
import { initialData } from '@/db/products'

// models
import { IProduct } from '@/interfaces'

const HomeView = (): ReactElement => {
    return (
        <>
            <Typography variant="h1">Tienda</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
            <Box height={50} />

            <ProductList products={initialData.products as IProduct[]} />
        </>
    )
}

export default HomeView
