import { FC, ReactElement, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

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
import { ICartProduct, IProduct, ISize } from '@/interfaces'

// styles
import { StyledProductView } from './productView-styles'

// store
import { AppDispatch } from '@/store/store'
import * as actions from '../../../store/cart'

export interface ProductViewProps {
    product: IProduct
}

const ProductView: FC<ProductViewProps> = ({ product }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter()

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
        _id: product._id,
        price: product.price,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        images: product.images[0],
        size: undefined,
        quantity: 1,
    })

    const selectedSize = (size: ISize): void => {
        setTempCartProduct((prevState) => ({ ...prevState, size }))
    }

    const onUpdateQuantity = (newQuantity: number): void => {
        setTempCartProduct((prevState) => ({
            ...prevState,
            quantity: newQuantity,
        }))
    }

    const onAddToCart = (): void => {
        dispatch(actions.addToCart(tempCartProduct))
        router.push('/cart')
    }

    return (
        <StyledProductView>
            {product && (
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
                                <ItemCounter
                                    quantity={tempCartProduct.quantity}
                                    maxValue={product.inStock > 10 ? 10 : product.inStock}
                                    updateQuantity={onUpdateQuantity}
                                />
                                <SizeSelector
                                    selectedSize={tempCartProduct.size}
                                    sizes={product.sizes}
                                    onSelectedSize={selectedSize}
                                />
                            </Box>

                            {product.inStock > 0 ? (
                                <DefaultButton
                                    color="secondary"
                                    sx={{ my: 2, color: 'white', fontWeight: 700 }}
                                    variant="contained"
                                    disabled={tempCartProduct.size === undefined}
                                    onClick={onAddToCart}
                                >
                                    {tempCartProduct.size
                                        ? 'Agregar al carrito'
                                        : 'Seleccione una talla'}
                                </DefaultButton>
                            ) : (
                                <Chip label="No hay disponibles" color="error" variant="outlined" />
                            )}

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
            )}
        </StyledProductView>
    )
}

export default ProductView
