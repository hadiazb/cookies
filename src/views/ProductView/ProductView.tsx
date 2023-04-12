import { FC, ReactElement } from 'react'

// components
import {
    Box,
    Grid,
    Typography,
    DefaultButton,
    Divider,
    Chip,
    ProductSlideshow,
    ItemCounter,
    SizeSelector,
} from '@/components'

// models
import { IProduct } from '@/interfaces'

// styles
import { StyledProductView } from './productView-styles'

export interface ProductViewProps {
    product: IProduct
}

const ProductView: FC<ProductViewProps> = ({ product }): ReactElement => {
    return (
        <StyledProductView>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h1">{product.title}</Typography>
                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle1">$ {product.price}</Typography>
                        </Box>

                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2">Cantidad</Typography>
                            <ItemCounter count={4} />
                            <SizeSelector selectedSize={product.sizes[0]} sizes={product.sizes} />
                        </Box>

                        <DefaultButton color="secondary" sx={{ my: 2 }} variant="outlined">
                            Agregar al carrito
                        </DefaultButton>

                        <Chip label="No hay disponibles" color="error" variant="outlined" />

                        <Box sx={{ mt: 3 }}>
                            <Divider />
                            <Typography variant="subtitle2" fontWeight={700}>
                                Descripción
                            </Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </StyledProductView>
    )
}

export default ProductView
