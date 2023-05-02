import { FC, ReactElement } from 'react'

// components
import { Typography, Box, ProductList, FullScreenLoading } from '@/components'

// api
import { getProducts } from '@/apis'

// hooks
import { useProducts } from '@/hooks'

// models
import { IProduct } from 'models'

export interface HomeViewProps {
    title: string
    subtitle: string
    category?: string
}

const HomeView: FC<HomeViewProps> = ({ title, subtitle, category = '' }): ReactElement => {
    const { products, error, isLoading } = useProducts<IProduct[]>(
        `/products?gender=${category}`,
        getProducts
    )

    return (
        <>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                {subtitle}
            </Typography>
            <Box height={50} />

            {isLoading && <FullScreenLoading />}
            {error && <p>Error</p>}
            {!isLoading && <ProductList products={products ?? []} />}
        </>
    )
}

export default HomeView
