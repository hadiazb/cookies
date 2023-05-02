import { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'

// components
import { Typography, Box, ProductList, FullScreenLoading } from '@/components'

// api
import { getProducts } from '@/apis'

// hooks
import { useProducts } from '@/hooks'

// models
import { IProduct } from 'models'

export interface SearchViewProps {
    title: string
    subtitle: string
}

const SearchView: FC<SearchViewProps> = ({ title, subtitle }): ReactElement => {
    const { query } = useRouter()

    const { products, error, isLoading } = useProducts<IProduct[]>(
        `/search/${query.query}`,
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

export default SearchView
