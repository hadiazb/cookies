import { FC, ReactElement } from 'react'

// components
import { Typography, Box, ProductList } from '@/components'

// models
import { IProduct } from 'models'

export interface SearchViewProps {
    title: string
    subtitle: string
    products: IProduct[]
    fountProducts: boolean
}

const SearchView: FC<SearchViewProps> = ({
    title,
    subtitle,
    products,
    fountProducts,
}): ReactElement => {
    return (
        <>
            <Typography variant="h1">{title}</Typography>
            {fountProducts ? (
                <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
                    Termino: {subtitle}
                </Typography>
            ) : (
                <Box display={'flex'}>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                        No encontramos ningún producto
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 1, ml: 1 }} color={'secondary'}>
                        {subtitle}
                    </Typography>
                </Box>
            )}
            <Box height={20} />

            {!fountProducts && (
                <Typography variant="h2" sx={{ mb: 2 }}>
                    Talvez te gustaria ver otro producto
                </Typography>
            )}

            <ProductList products={products} />
        </>
    )
}

export default SearchView
