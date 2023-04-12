import { FC, ReactElement } from 'react'

// components
import { Grid, ProductCard } from '@/components'

// models
import { IProduct } from '@/interfaces'

export interface ProductListProps {
    products: IProduct[]
}

const ProductList: FC<ProductListProps> = ({ products }): ReactElement => {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
        </Grid>
    )
}

export default ProductList
