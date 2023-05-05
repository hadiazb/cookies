import { FC, ReactElement, useMemo, useState } from 'react'
import Link from 'next/link'

// components
import { Card, CardActionArea, CardMedia, Grid, Box, Typography, Chip } from '@/components'

// models
import { IProduct } from '@/interfaces'

export interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoad, setIsImageLoad] = useState(false)

    const productImage = useMemo(() => {
        return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`
    }, [isHovered, product.images])

    const imageLoaded = useMemo(() => {
        return isImageLoad ? 'block' : 'none'
    }, [isImageLoad])

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
            <Link href={`/product/${product.slug}`} passHref prefetch={false}>
                <Card>
                    <CardActionArea>
                        {product.inStock === 0 && (
                            <Chip
                                color="primary"
                                label="No disponible"
                                sx={{ position: 'absolute', zIndex: 99, top: '0px', left: '0px' }}
                            />
                        )}
                        <CardMedia
                            image={productImage}
                            component="img"
                            alt={product.title}
                            onLoad={() => setIsImageLoad(true)}
                        />
                    </CardActionArea>
                </Card>
            </Link>

            <Box sx={{ mt: 1, display: imageLoaded }}>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>$ {product.price}</Typography>
            </Box>
        </Grid>
    )
}

export default ProductCard
