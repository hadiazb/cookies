import { FC, ReactElement, useMemo, useState } from 'react'
import Link from 'next/link'

// components
import { Card, CardActionArea, CardMedia, Grid, Box, Typography } from '@/components'

// models
import { IProduct } from '@/interfaces'

export interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false)

    const productImage = useMemo(() => {
        return isHovered ? `products/${product.images[1]}` : `products/${product.images[0]}`
    }, [isHovered, product.images])

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <Link href={'/product/slug'} passHref prefetch={false}>
                <Card>
                    <CardActionArea>
                        <CardMedia image={productImage} component="img" alt={product.title} />
                    </CardActionArea>
                </Card>
            </Link>

            <Box sx={{ mt: 1 }}>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>$ {product.price}</Typography>
            </Box>
        </Grid>
    )
}

export default ProductCard
